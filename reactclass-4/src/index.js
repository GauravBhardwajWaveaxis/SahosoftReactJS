/* 
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    { <App /> }
    <h1>Hello World !</h1>
  </React.StrictMode>
);

*/

import react from "react";
import reactDOM from "react-dom";
import empName from "./employee";

reactDOM.render(
  <>
    <h1>Welcome to ReactJS Class</h1>
    <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
    <h2>Welcome To ReactJS.</h2>
    <button>Click Me</button>
    {console.log(empName)}
  </>,

  document.getElementById("root")
);

// import react from "react";
// import reactDOM from "react-dom";
// import Employee from "./employee";

// const obj = new Employee();

// reactDOM.render(
//   <>
//     <h1>Welcome to ReactJS Class</h1>
//     <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
//     <h2>Welcome To ReactJS.</h2>
//     <button>Click Me</button>
//     {obj.admin1()}
//   </>,

//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import emp from "./employee.js";

// const obj = new emp();

// ReactDOM.render(
//   <>
//     <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
//     <h2>Welcome To ReactJS.</h2>
//     <button>Click Me</button>
//     {(obj.admin1(), obj.admin2())}
//     { {obj.admin2()} }
//   </>,

//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";

// // import emp from "./employee.js";

// import empData from "./employee.js";

// // const obj = new emp();

// ReactDOM.render(
//   <>
//     <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
//     <h2>Welcome To ReactJS.</h2>
//     <button>Click Me</button>
//     {/* {(obj.admin1(), obj.admin2())} */}
//     {/* { {obj.admin2()} } */}
//     {empData()}
//   </>,

//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import Emp from "./employee.js";

// ReactDOM.render(
//   <>
//     <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
//     <h2>Welcome To ReactJS.</h2>
//     <button>Click Me</button>
//     {console.log(Emp)}
//   </>,

//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import e, { Employee, Student } from "./employee.js";

// const obj1 = new Employee();
// const obj2 = new Student();

// ReactDOM.render(
//   <>
//     <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
//     <h2>Welcome To ReactJS.</h2>
//     <button>Click Me</button>
//     {((obj1.admin(), obj2.getStudentDetail()), console.log(e()))}
//   </>,

//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// // import e, { Employee, Student } from "./employee.js";

// import * as data from "./employee";

// // const obj1 = new Employee();
// // const obj2 = new Student();

// const obj = data.Employee();

// ReactDOM.render(
//   <>
//     <h1>Hello My Name Is Gaurav Bhardwaj.</h1>
//     <h2>Welcome To ReactJS.</h2>
//     <button>Click Me</button>
//     {/* {((obj1.admin(), obj2.getStudentDetail()), console.log(e()))} */}
//     {obj.admin1()}
//   </>,

//   document.getElementById("root")
// );
