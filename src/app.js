import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  let [data, setData] = useState({});
  let [requestParams, setRequestParams] = useState({});

  useEffect(async () => {
    if(requestParams.method === 'GET'){
      try{
        let response = await axios.get(requestParams.url);
        console.log(response.data.length);
        setData({
          count: response.data.length,
          headers: response.headers,
          results: response.data,
        });
      }catch(e){
        console.error(e);
      }
    }
  }, [requestParams.url]);


  const callApi = async (reqParam) => {
    try {
      setRequestParams(reqParam);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment >
  );
}

export default App;
