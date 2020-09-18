import React from "react";
import "./App.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({
              username: e.target.value,
            });
          }}
        />
        <input
          type="password"
          onChange={(e) => {
            this.setState({
              password: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(
              `Username: ${this.state.username} || Password: ${this.state.password}`
            );
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
