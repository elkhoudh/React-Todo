import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
class App extends Component {
  state = {
    todo: [],
    task: ""
  };

  componentDidMount = () => {
    fetch("https://comptagroup.com/api/todos")
      .then(res => res.json())
      .then(todo => {
        if (todo.message) alert("Failed to get todos");

        this.setState({ todo });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    !this.state.task
      ? null
      : fetch("https://comptagroup.com/api/todos", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        })
          .then(res => res.json())
          .then(todo => this.setState({ todo, task: "" }));
    // if (this.state.task.length === 0) {
    //   return;
    // }
    // this.setState({
    //   todo: [
    //     ...this.state.todo,
    //     {
    //       task: this.state.task,
    //       id: Date.now(),
    //       completed: false
    //     }
    //   ],
    //   task: ""
    // });
  };

  clearTodos = e => {
    e.preventDefault();
    fetch("https://comptagroup.com/api/todos/clearcompleted")
      .then(res => res.json())
      .then(todo => this.setState({ todo }));
  };

  handleCompleted = (e, i) => {
    this.setState(
      {
        todo: this.state.todo.map(todo => {
          if (i !== todo._id) {
            return todo;
          } else {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
        })
      },
      () =>
        fetch(`https://comptagroup.com/api/todos/update/${i}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        })
          .then(res => res.json())
          .then(todo => this.setState({ todo }))
    );
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TodoForm
          handleChange={this.handleChange}
          task={this.state.task}
          addTodo={this.addTodo}
          clearTodos={this.clearTodos}
        />
        {this.state.todo.length === 0 ? (
          <p style={{ padding: "20px 0", fontSize: "2rem" }}>NO TODOS FOUND</p>
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
