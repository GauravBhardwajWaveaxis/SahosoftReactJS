import { Component } from "react";

class StateDemo extends Component {
  constructor() {
    super();

    this.city = "Karnataka";
  }
  render() {
    return (
      <>
        <h1>{`My Current State is ${this.city}.`}</h1>
      </>
    );
  }
}

class StateDemo2 extends Component {
  constructor() {
    super();

    this.state = {
      id: 12,
      empName: "Chetan Patil",
    };
    // this.employee = {
    //   id: 10,
    //   Crickter: "Sachin Tendulkar",
    // };
  }
  // render() {
  //   return (
  //     <>
  //       <h1>{`Crickter Name Is ${this.employee.Crickter}.`}</h1>
  //     </>
  //   );
  // }

  render() {
    return (
      <>
        <h2>{`Employee Id is:${this.state.id} My name is ${this.state.empName}`}</h2>

        <button
          onClick={() => {
            this.setState({ empName: "Chandan Sir" });
          }}
        >
          Change Name
        </button>
      </>
    );
  }
}

export default StateDemo;
export { StateDemo2 };
