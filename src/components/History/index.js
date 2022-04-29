//create component to render the history array stored in state

function History({ data }) {
  return (
    <>
      {
        data.map((item, idx) => <p key={idx}>URL: {item.url} | METHOD: {item.method.toUpperCase()} </p>)
      }
    </>
  );
}

export default History;