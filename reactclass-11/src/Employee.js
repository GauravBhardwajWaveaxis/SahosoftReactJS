import React, { Component } from "react";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  getEmpProps() {
    let empId = this.props.id;
    console.log(empId);
  }

  render() {
    return (
      <>
        <h1>Employee</h1>
        <h2>
          Employee Info:{this.props.id} and {this.props.mblNo}
        </h2>
        {this.getEmpProps()}
      </>
    );
  }
}
