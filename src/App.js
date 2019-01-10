import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
class App extends Component {
  state = {
    todo: [],
    newTodo: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    if (this.state.newTodo.length === 0) {
      return;
    }
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
      <div className="App">
        <NavBar />
        <br />
        <TodoForm
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
          addTodo={this.addTodo}
          clearTodos={this.clearTodos}
        />
        {this.state.todo.length === 0 ? (
          <p style={{ padding: "20px 0", fontSize: "20px" }}>NO TODOS FOUND</p>
        ) : (
          this.state.todo.map((todo, i) => (
            <TodoList
              key={i}
              todo={todo}
              handleCompleted={this.handleCompleted}
            />
          ))
        )}
      </div>
    );
  }
}

export default App;
