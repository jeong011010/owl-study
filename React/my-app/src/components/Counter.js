import React, { useEffect, useState } from 'react';

const Counter = (props) => {
  
  const [count, setCount] = useState(0);
  const clickString = props.click || 'Click';

  return (
      <button onClick={() => {setCount(count + 1)}}>
          {clickString} {count}
      </button>
  );
};

export default Counter;
