import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: ["hey", "bey", "rey", "sey", "dey"],
    };
  }

  render() {
    const mappedList = this.state.list.map((el, i) => {
      return <h2 key={i}>{el}</h2>;
    });
    return (
      <div>
        <ul>{mappedList}</ul>
      </div>
    );
  }
}

export default App;
