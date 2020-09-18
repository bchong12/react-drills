import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Todo = (props) => <h4 key={props.index}>{props.todo}</h4>;
const List = (props) => {
  return (
    <div>
      {props.tasks.map((todo, i) => {
        return <Todo key={i} index={i} todo={todo} />;
      })}
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  render() {
    return (
      <div>
        <h1>My Todo List!</h1>
        <input
          value={this.state.newTask}
          onChange={(e) =>
            this.setState({
              newTask: e.target.value,
            })
          }
        />
        <button
          onClick={() => {
            this.setState({
              tasks: [...this.state.tasks, this.state.newTask],
              newTask: "",
            });
          }}
        >
          New Task
        </button>
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
