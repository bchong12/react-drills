import React from "react";
import "./App.css";

const Image = (props) => {
  return <img src={props.source} />;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Image
          source={
            "https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide"
          }
        />
      </div>
    );
  }
}

export default App;
