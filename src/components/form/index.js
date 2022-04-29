import React from 'react';
import './form.scss';
import { useReducer } from 'react';

export const intitialState = {
  url: '',
  method: 'get',
  data: {},
};

export const reducer = (state = intitialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'HANDLE INPUT TEXT':
    return { ...state, [action.field]: action.payload};
  case 'UPDATE METHOD':
    return { ...state, method: payload};
  default:
    return state;
  }
};

function Form({ handleApiCall }) {
  let [state, dispatch] = useReducer(reducer, intitialState);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      handleApiCall(state);
    }
    catch (e) {
      console.error(e);
    }
  };

  const handleTextChange = (e) => {
    try{
      dispatch({
        type: 'HANDLE INPUT TEXT',
        field: e.target.name,
        payload: e.target.value,
      });
    }
    catch(e){
      console.error(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          {/* name is for inpur/label */}
          <input name='url' type='text' onChange={handleTextChange}/>
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span onClick={ ()=> dispatch({ type: 'UPDATE METHOD', payload: 'get'}) } id='get'>GET</span>
          <span onClick={ ()=> dispatch({ type: 'UPDATE METHOD', payload: 'post'}) } id='post'>POST</span>
          <span onClick={ ()=> dispatch({ type: 'UPDATE METHOD', payload: 'put'}) } id='put'>PUT</span>
          <span onClick={ ()=> dispatch({ type: 'UPDATE METHOD', payload: 'delete'}) } id='delete'>DELETE</span>
        </label>
        {state.method === 'POST' || state.method === 'PUT' ?
          <>
            <span>JSON BODY</span>
            <textarea name='data' type='text' onChange={handleTextChange}></textarea>
          </>
          : ''
        }
      </form>
    </>
  );
}

export default Form;
