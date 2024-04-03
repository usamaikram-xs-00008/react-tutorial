import { useState } from "react";
import "./App.css";
import Table from "./table";
import ColorPicker from "./color-picker";

function App() {
  const [user, setUser] = useState({
    count: 0,
    name: "MUI",
    role: "HOD",
  });

  const handleIncrementSetUser = () => {
    setUser({
      count: user.count + 1,
      name: user.name,
      role: user.role,
    });
  };

  const handleDecrementSetUser = () => {
    setUser({
      count: user.count - 1,
      name: user.name,
      role: user.role,
    });
  };

  return (
    <>
      <div className="alert alert-primary" role="alert">
        Task-01
      </div>
      <hr />
      <ColorPicker />
      <hr />
      <Table />
      <hr />
      <div className="alert alert-primary" role="alert">
        Task-02
      </div>
      <hr />
      <p>NAME : {user.name}</p>
      <p>ROLE : {user.role}</p>
      <p>COUNT : {user.count}</p>
      <button
        className="btn btn-success me-1"
        onClick={() => handleIncrementSetUser()}
      >
        Press to increase count
      </button>
      <button
        className="btn btn-danger "
        onClick={() => handleDecrementSetUser()}
      >
        Press to decrease count
      </button>
    </>
  );
}

export default App;
