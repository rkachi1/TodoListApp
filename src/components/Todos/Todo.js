import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "./Todo.css";
function Todo(props) {
  return (
    <List className="todos__List">
      <ListItem>
        <ListItemText primary={props.text}></ListItemText>
      </ListItem>
    </List>
  );
}

export default Todo;
