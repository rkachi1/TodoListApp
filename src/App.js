import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todos/Todo";
import db from "./components/Todos/firebase";
import firebase from "firebase";
function App() {
  // using useStateHook to set a value for the todos

  const [todos, setTodos] = useState([]);
  // using useStateHook to set a value for the input
  const [input, setInput] = useState("");

  //When we actually come on to the page we need to listen to the database and get back the data

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTodos(snapshot.docs.map((doc) => doc.data().todo))
      );
  }, []);

  //Adding a todo function
  const addTodos = (event) => {
    //this function prevents refreshing of the screen
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);

    setInput("");
  };
  return (
    <div>
      <div className="App">
        <h1>To Do List App Using React and Firebase</h1>
        <form>
          <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input
              id="standard-basic"
              label="Add Todo"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </FormControl>
          <Button
            className="todoButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={addTodos}
            disabled={!input}
          >
            Add Todo
          </Button>
        </form>
      </div>
      <div className="newClass">
        <ul>
          {todos.map((todo) => (
            <Todo text={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
