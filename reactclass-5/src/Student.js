import React, { Component } from "react";
import ReactDOM from "react-dom";

class Student extends Component {
  constructor() {
    super();
    console.log("This Is Student Constructor...");
  }

  // ele = (<h2>vcfjkhnerbgvcfscfgsfbsx jfvnhdfvbgdfcvnhvd,bgvvjkgv </h2>);

  // render() {
  //   return <h2>This Is Student Class Component</h2>;
  // }

  // render() {
  //   return <>{this.ele}</>;
  // }

  // render() {
  //   return (
  //     <>
  //       <h2>This Is Student Class Component</h2>
  //       <h2>This Is Student Class Component</h2>
  //     </>
  //   );
  // }

  mobileNumber = 67576575757;
  city = "Bangalore";

  numList = [5, 55, 75, 76, 56, 48, 7, 5, 8];

  render() {
    return (
      <>
        {/* <h2>This Is Student Class Component</h2>
        <h2>This Is Student Class Component</h2>
        {(this.mobileNumber, this.city)} */}
        {/* {this.numList.map((num) => {
          return <h2>{num}</h2>;
        })} */}
        {/* {this.numList.map((num) => (
          <h5>{num}</h5>
        ))} */}
      </>
    );
  }
}
export default Student;
