import React from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/History';



export const intitialState = {
  data: {},
  requestParams: {},
  backwards: [],
};

export const reducer = (state = intitialState, action) => {
  const { type, payload } = action;
  switch (type) {
  //implement stack for backwards tracking array
  case 'UPDATE DATA':
    return { ...state, data: payload };
  case 'UPDATE BACKWARDS':
    return { ...state, backwards: [...state.backwards, payload] };
  default:
    return state;
  }
};

function App() {
  let [state, dispatch] = useReducer(reducer, intitialState);

  const callApi = async (reqParam) => {
    state.requestParams = reqParam;
    try {
      if (reqParam.method === 'get') {
        dispatch({
          type: 'UPDATE BACKWARDS',
          payload: reqParam,
        });
        let results = await axios.get(reqParam.url);
        let newData = {
          count: '',
          headers: results.headers,
          results: results.data,
        };
        //adds a record to the history state
        dispatch({
          type: 'UPDATE DATA',
          payload: newData,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <React.Fragment>
        <Header />
        <p>HISTORY:</p>
        <History data={state.backwards}/>
        {/* <div>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div> */}
        <Form handleApiCall={callApi} />
        <Results data={state.data} handleApiCall={callApi} />
        <Footer />
      </React.Fragment >
    </>
  );
}

export default App;
