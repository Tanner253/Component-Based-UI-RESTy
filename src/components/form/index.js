import React from 'react';
import './form.scss';
import { useState } from 'react';

function Form({ handleApiCall }) {

  let [url, setUrl] = useState('temp');
  let [method, setMethod] = useState('GET');
  let [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(e.target.url.value);
    console.log(method, url, data);
    let obj = {
      url: url,
      method: method,
      data: data,
    };
    handleApiCall(obj);
  };

  const updateMethod = (e) => {
    let { id } = e.target;
    setMethod(id.toUpperCase());
  };

  const onChange = (e) => {
    let { name, value } = e.target;
    if (name === 'url') setUrl(value);
    if (name === 'body') setData(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          {/* name is for inpur/label */}
          <input name='url' type='text' onChange={onChange} />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span id='get' onClick={updateMethod}>GET</span>
          <span id='post' onClick={updateMethod}>POST</span>
          <span id='put' onClick={updateMethod}>PUT</span>
          <span id='delete' onClick={updateMethod}>DELETE</span>
        </label>
        {method === 'POST' || method === 'PUT' ?
          <>
            <span>JSON BODY</span>
            <textarea name='body' type='text' onChange={onChange}></textarea>
          </>
          : ''
        }
      </form>
    </>
  );
}

export default Form;
