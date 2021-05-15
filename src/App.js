import { useState } from "react";
import "./App.css";

function App() {
  // using useStateHook to set a value for the todos

  const [todos, setTodos] = useState([
    "Take gos for a walk",
    "Get hired in a company",
    "Need something in replacement",
  ]);
  // using useStateHook to set a value for the input
  const [input, setInput] = useState("");

  //Adding a todo function
  const addTodos = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <div className="App">
        <h1>Hello World</h1>
        <form>
          <input
            placeholder="Add todo..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <button type="submit" onClick={addTodos}>
            Add Todo
          </button>
        </form>
      </div>
      <div className="newClass">
        <ul>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
