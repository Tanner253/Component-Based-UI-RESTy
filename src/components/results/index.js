import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/adventure_time.css';

function Results({data}){
  return (
    <section>
      <JSONPretty data={JSON.stringify(data)}></JSONPretty>
    </section>
  );
}
export default Results;
