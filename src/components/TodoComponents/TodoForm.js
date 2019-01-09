import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="newTodo"
        onChange={props.handleChange}
        value={props.newTodo}
        placeholder="...todo"
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
