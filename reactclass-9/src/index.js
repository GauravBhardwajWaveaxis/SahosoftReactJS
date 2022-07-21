import React, { Component } from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

function PropTest(props) {
  console.log(props);
  return (
    <>
      {/* <h2>
        Hello! My Name is {props.name}. My mobile number is {props.mblNo} and my
        age is {props.age}. Gender value :{props.gender ? "Male" : "Female"}
        {props.gender}
      </h2>
      <h2>isActive:{props.isActive ? "Active" : "False"}</h2>
      <ul>
        My friends List given below :
        {props.friendsList.map((names, index, array) => {
          return <li key={index}>{names}</li>;
        })}
      </ul>
      <h2>
        Employee Details :<li>Id: {props.empObj.id}</li>
        <li> Name:{props.empObj.empName}</li>
        <li>
          {" "}
          City:
          {props.empObj.city}
        </li>
      </h2> */}
      {/* <h2>{props.fun()}</h2> */}
      {/* <h2>{props.fun("This Is Parameterized Function")}</h2> */}
    </>
  );
}

// const friends = ["suyash", "neeta", "cheetan", "amit"];

// const emp = {
//   id: 24,
//   empName: "Gaurav Bhardwaj",
//   city: "Bangalore",
// };

// ReactDOM.render(
//   <>
//     <h1>Props In ReactJS.</h1>
//     {/* <PropTest
//       name="Gaurav"
//       mblNo="7017651577"
//       age={25}
//       gender={true}
//       isActive={false}
//       friendsList={friends}
//       empObj={emp}
//     /> */}
//     {/* <h2>Sending Function</h2> */}
//     {/* <PropTest
//       fun={() => {
//         return "This Is Function";
//       }}
//     /> */}
//     {/* <PropTest
//       fun={(msg) => {
//         return msg;
//       }}
//     /> */}
//     <Student />
//   </>,
//   document.getElementById("root")
// );

class Employee extends Component {
  constructor(props) {
    super();
    console.log(props.empInfo);
  }
  render() {
    return (
      <>
        <h2>
          Employee Detail :
          {`Employee Id is ${this.props.empInfo.id} and name is ${this.props.empInfo.name}.`}
        </h2>
      </>
    );
  }
}

const emp = {
  id: 25,
  name: "Gaurav Bhardwaj",
};

ReactDOM.render(
  <>
    <h1>Props In ReactJS.</h1>
    <Employee empInfo={emp} />
  </>,
  document.getElementById("root")
);
