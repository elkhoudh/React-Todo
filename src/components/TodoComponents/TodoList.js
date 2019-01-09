import React from "react";
import "./Todo.css";

const TodoList = props => {
  return (
    <div>
      <p
        className={props.todo.completed ? "line list" : "list"}
        onClick={e => props.handleCompleted(e, props.todo.id)}
      >
        {props.todo.task}
      </p>
    </div>
  );
};

export default TodoList;
