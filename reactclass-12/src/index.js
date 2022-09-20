import React, { Component } from "react";
import ReactDOM from "react-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: 10,
    //   name: "Gaurav",
    //   city: "Bangalore",
    //   email: this.props.email,
    // };
    this.state = {
      id: 10,
      name: "Gaurav",
      city: "Bangalore",
      email: "bhardwajgaurav77946@gmail.com",
      counter: 1,
    };
    this.changeData = this.changeData.bind(this);
  }

  // changeData() {
  //   this.setState({
  //     id: 5,
  //     name: "Gaurav Bhardwaj",
  //     city: "New Delhi",
  //     email: "gaurav.bhardwaj@waveaxis.com",
  //   });
  // }

  // changeData() {
  //   this.setState({
  //     name: "Gaurav Bhardwaj",
  //     city: "New Delhi",
  //     email: "gaurav.bhardwaj@waveaxis.com",
  //   });
  // }

  // changeData = () =>
  //   this.setState({
  //     id: 5,
  //     name: "Gaurav Bhardwaj",
  //     city: "New Delhi",
  //     email: "gaurav.bhardwaj@waveaxis.com",
  //   });

  // changeData = () => {
  //   return this.setState({
  //     id: 5,
  //     name: "Gaurav Bhardwaj",
  //     city: "New Delhi",
  //     email: "gaurav.bhardwaj@waveaxis.com",
  //   });
  // };

  // changeData() {
  //   this.setState((state, props) => {
  //     console.log(this);
  //     console.log(state, props);
  //     return {
  //       id: 5,
  //       name: "Gaurav Bhardwaj",
  //       city: "New Delhi",
  //       // email: "gaurav.bhardwaj@waveaxis.com",
  //       email: props.email,
  //       counter: state.counter + 1,
  //     };
  //   });
  // }

  // changeData() {
  //   this.setState(function (state, props) {
  //     return {
  //       id: 5,
  //       name: "Gaurav Bhardwaj",
  //       city: "New Delhi",

  //       email: props.email,
  //       counter: state.counter + 1,
  //     };
  //   });
  // }

  // changeData() {
  //   this.setState({ id: 5, name: "Gaurav Bhardwaj", city: "New Delhi" });
  // }

  // changeData() {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }

  // changeData() {
  //   this.setState((state) => ({ counter: state.counter + 1 }));
  //   this.setState((state) => ({ counter: state.counter + 1 }));
  //   this.setState((state) => ({ counter: state.counter + 1 }));
  // }

  // changeData() {
  //   console.log(this.state);
  //   this.setState(
  //     {
  //       id: 15,
  //       name: "Sachin",
  //       city: "Noida",
  //       email: this.state.email,
  //     },
  //     console.log(this.state)
  //   );
  // }

  changeData() {
    console.log(this.state);
    this.setState(
      (state, props) => {
        return {
          email: props.email,
          counter: state.counter + 1,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <>
        <h3>My Id Is :{this.state.id}</h3>
        <h3>My Name Is :{this.state.name}</h3>
        <h3>My City Is :{this.state.city}</h3>
        <h3>My Email Is :{this.state.email}</h3>
        <h1>Count :{this.state.counter}</h1>
        <button onClick={this.changeData}>Update Value</button>
      </>
    );
  }
}

ReactDOM.render(
  <>
    <Index email="bhardwajgaurav.sre@gmail.com" />
  </>,
  document.getElementById("root")
);
