import { useState } from "react";

export function useCount() {
  const [count, setCount] = useState(10);

  function increment() {
    setCount(count + 1);
  }

  //   return {count,increment}

  return [count, increment];
  //   [0,1]
}
