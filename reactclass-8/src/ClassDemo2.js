import React, { Component } from "react";

class ClassDemo2 extends Component {
  render() {
    return (
      <>
        <h1>Gaurav Bhardwaj</h1>
        <h1>Frontend Software Developer</h1>
        <h1>Bangalore</h1>
      </>
    );
  }
}

class InnerDemo extends Component {
  render() {
    return (
      <>
        <h1>Waveaxis</h1>
        <h1>JavaScript</h1>
        <h1>ReactJS</h1>
      </>
    );
  }
}

export default ClassDemo2;
export { InnerDemo };
