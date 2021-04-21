// Use rfce as an extension for adding this code snippet for a component
import React from "react";
// Here we do not have access to the todo from the main component(App) hence we use the prop
function Todo(props) {
  return (
    <div>
      <li>{props.text} </li>
    </div>
  );
}

export default Todo;
