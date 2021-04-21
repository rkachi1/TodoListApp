import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([
    "Take dogs for walk",
    "Code in React",
    "Code using visual studio Code",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    // this will fire off when we click the button
    // prevent refreshing of the screen
    event.preventDefault();
    // spreading out the current content
    setTodos([...todos, input]);
    // Update the input back to empty string
    setInput("");
  };
  return (
    <div>
      <h1>Hello world</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a Todo</InputLabel>

          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
