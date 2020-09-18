import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: ["Batman", "Superman", "Ironman", "Black Widow", "Hulk"],
      filterString: "",
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({
              filterString: e.target.value,
            });
          }}
        />
        <ul>
          {this.state.list
            .filter((el) => {
              return el.includes(this.state.filterString);
            })
            .map((el, i) => {
              return <h2 key={i}>{el}</h2>;
            })}
        </ul>
      </div>
    );
  }
}

export default App;
