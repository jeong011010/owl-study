import React, { useEffect, useState } from 'react';
import Counter from './components/Counter'

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = ()  => {
    setCondition(!condition);
  }
  useEffect(() => {
    console.log(condition);
  }, [condition])
  const renderCondition = condition ? 'True':'False';

  return (
    <div className="App">
      <h1>Kim Jazz</h1>
      {renderCondition}<br/>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
