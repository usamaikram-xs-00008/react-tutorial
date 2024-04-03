import { useState } from "react";
import "./App.css";

function App() {
  const [data, setValue] = useState({
    name: "xeven",
    role: "CEO",
    count: 0,
  });

  const handleCount = () => {
    setValue((prevVal) => ({
      ...prevVal,
      count: prevVal.count + 1,
    }));
  };
  const handledecrement = () => {
    setValue((prevVal) => ({
      ...prevVal,
      count: prevVal.count - 1,
    }));
  };

  const handleName = (e) => {
    // object destructuring
    const { name, value } = e.target;

    setValue((prevVal) => ({
      ...prevVal,
      // assigning values to key
      [name]: value,
    }));
  };

  console.log(data);
  // react uses virtual dom for html elements to and compare the value of the element to check which element is updated
  return (
    <>
      <h3>hooks managment</h3>
      <h2>{data.name}</h2>
      <h2>{data.count}</h2>
      <h2>{data.role}</h2>
      <button onClick={() => handleCount()}>increment</button>
      <input
        value={data.name}
        name="username"
        onChange={(e) => handleName(e)}
      />
      <button onClick={() => handledecrement()}>decrement</button>
    </>
  );
}

export default App;
