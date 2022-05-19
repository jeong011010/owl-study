import React, { useEffect, useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);
  useEffect(()=> {
    console.log(count)
  }, [count])
  console.log('rendering');

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => {setCount(count + 1)}}>Click</button>
    </div>
  );
}

export default App;
