import "./App.css";
import { useCount } from "./count";
import Header from "./header";

function App() {
  const [count, increment] = useCount();
  // react uses virtual dom for html elements to and compare the value of the element to check which element is updated
  return (
    <>
      {/* conditional rendering */}
      <p>{count || 0}</p>

      <Header name={"asd"} />
      {/* fat arrow function */}
      <button onClick={() => increment()}>count is {count}</button>
    </>
  );
}

export default App;
