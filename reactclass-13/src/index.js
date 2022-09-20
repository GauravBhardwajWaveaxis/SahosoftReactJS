import React, { Component } from "react";
import ReactDOM from "react-dom";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  changeHandler = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Index Component</h1>
        <h1>Counter:{this.state.count}</h1>

        <button onClick={this.changeHandler}>Update</button>
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
