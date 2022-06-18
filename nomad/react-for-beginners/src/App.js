import {useEffect, useState} from "react";

function App() {
  const [counter,setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <h1>props</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"/>
      <p>{counter}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
