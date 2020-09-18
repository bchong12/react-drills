import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input
          onChange={(e) => {
            this.setState({
              text: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default App;
