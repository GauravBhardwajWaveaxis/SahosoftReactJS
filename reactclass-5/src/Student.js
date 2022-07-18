import React, { Component } from "react";
import ReactDOM from "react-dom";

class Student extends Component {
  constructor() {
    super();
    console.log("This Is Student Constructor");
  }

  ele = (<h2>JSX Hold In Variable.This Is Javascript Expression.</h2>);

  // render() {
  //   return (
  //     <>
  //       <h2>This Is Student Class Component...</h2>
  //       {this.ele}
  //     </>
  //   );
  // }

  // render() {
  //   return (
  //     <>
  //       <h2>This Is Student Class Component...</h2>
  //       <h2>This Is Student Class 2nd Component...</h2>
  //     </>
  //   );
  // }

  mobNo = +917017651577;

  city = "Bangalore";

  numList = [12, 34, 56, 233, 565, 32];

  render() {
    return (
      <>
        {`My city name is ${this.city} and my mobile no is ${this.mobNo}.`}

        {/* {this.numList.map((num) => {
          return <h3>{num}</h3>;
        })} */}

        {this.numList.map((num) => (
          <h3>{num}</h3>
        ))}
      </>
    );
  }
}

export default Student;
