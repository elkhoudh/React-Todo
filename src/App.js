import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends Component {
  state = {
    todo: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: this.state.newTodo,
          id: Date.now(),
          completed: false
        }
      ],
      newTodo: ""
    });
  };

  clearTodos = e => {
    e.preventDefault();
    const filteredCompleted = this.state.todo.filter(
      todo => todo.completed !== true
    );

    this.setState({ todo: filteredCompleted });
  };

  handleCompleted = (e, i) => {
    const clickedOn = this.state.todo
      .filter(todo => todo.id === i)
      .map(task => (task.completed = !task.completed));
    this.setState({ todo: [...this.state.todo, clickedOn] });
  };

  render() {
    return (
      <div>
        {this.state.todo.length === 0
          ? "NO TODOS FOUND"
          : this.state.todo.map((todo, i) => (
              <TodoList
                key={i}
                todo={todo}
                handleCompleted={this.handleCompleted}
              />
            ))}

        <TodoForm
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
          addTodo={this.addTodo}
          clearTodos={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;
