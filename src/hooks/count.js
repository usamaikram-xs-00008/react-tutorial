import { useState } from "react";

// custom hooks name must start with use keyword e.g useCounter
export function useCount() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  // returns only the declared variable and functions
  //   return {count,increment}

  // returns variables as an array of {count,increment} can be used with any variable name as parameter
  return [count, increment];
  //   [0,1]
}
