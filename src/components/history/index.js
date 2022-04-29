//create component to render the history array stored in state
import React from 'react';
import './history.scss';

function History({ data, handleApiCall }) {
  return (
    <>
      {
        data.map((item, idx) => {
          <label>
            <a onClick={handleApiCall(item)} key={idx}>URL: {item.url} | METHOD: {item.method.toUpperCase()} </a>
          </label>
        })};
    </>
  );
}

export default History;