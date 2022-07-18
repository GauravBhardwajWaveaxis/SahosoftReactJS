// import react, { Component } from "react";
// import reactDOM from "react-dom";
// import Student from "./Student";

// class Demo extends Component {
//   render() {
//     return <h1>Demo Class Render Method.</h1>;
//   }
// }

// reactDOM.render(
//   <>
//     <Demo />
//     <Student />
//     <h1>Hello World !!!</h1>
//   </>,
//   document.getElementById("root")
// );

// import react, { Component } from "react";
// import reactDOM from "react-dom";
// import Student from "./Student";

// const Demo = () => {
//   return <h1>This Is Demo Function with single Element !!!</h1>;
// };

// reactDOM.render(
//   <>
//     <Demo />
//     <Student />
//     <h1>Hello World !!!</h1>
//   </>,
//   document.getElementById("root")
// );

// import react, { Component } from "react";
// import reactDOM from "react-dom";
// import Student from "./Student";

// const Demo = () => {
//   return <h1>This is demo function with single element !!!</h1>;
// };

// reactDOM.render(
//   <>
//     <Demo />
//     <Student />
//     <h1>Hello World !!!.This is H1 element.</h1>
//     <p>This is paragraph element.</p>

//     <button>Click Me</button>
//   </>,
//   document.getElementById("root")
// );

//==============================React Fragment==============================//

// import { Fragment } from "react";
// import reactDOM from "react-dom";
// import Student from "./Student";

// const Demo = () => {
//   return <h1>This is demo function with single element !!!</h1>;
// };

// reactDOM.render(
//   <Fragment>
//     <Demo />
//     <Student />
//     <h1>Hello World !!!.This is H1 element.</h1>
//     <p>This is paragraph element.</p>

//     <button>Click Me</button>
//   </Fragment>,
//   document.getElementById("root")
// );

// import { Fragment } from "react";
// import reactDOM from "react-dom";
// import Student from "./Student";
// import Header from "./Header";
// import Footer from "./Footer";

// const Demo = () => {
//   return <h1>This is demo function with single element !!!</h1>;
// };

// reactDOM.render(
//   <>
//     <Header />
//     <Demo />
//     <Student />

//     <h1>Hello World !!!.This is H1 element.</h1>
//     <p>This is paragraph element.</p>

//     <button>Click Me</button>
//     <Footer />
//   </>,
//   document.getElementById("root")
// );

// import reactDOM from "react-dom";

// let id = 10;
// let city = "Bangalore";

// reactDOM.render(
//   <>{`My id is ${id} and my city is ${city}.`}</>,
//   document.getElementById("root")
// );

// import { Fragment } from "react";
// import reactDOM from "react-dom";
// import Student from "./Student";
// import Header from "./Header";
// import Footer from "./Footer";

// const Demo = () => {
//   return <h1>This is demo function with single element !!!</h1>;
// };

// var ele = <h1 className="firstAttribute">Hello Sahosoft !!!</h1>;

// function changeBgColor() {
//   document.getElementById("heading").style.backgroundColor = "red";
// }

// reactDOM.render(
//   <>
//     {ele}
//     <Header />
//     <Demo />
//     <Student />

//     <h1 id="heading" className="head">
//       Hello World !!!.This is H1 element.
//     </h1>
//     <p>This is paragraph element.</p>

//     <input type="text" placeholder="Enter your Name" />
//     <button onClick={changeBgColor}>Click Me</button>
//     <Footer />
//   </>,
//   document.getElementById("root")
// );

import reactDOM from "react-dom";
import Student from "./Student";
import Header from "./Header";
import Footer from "./Footer";

const Demo = () => {
  return <h1>This is demo function with single element !!!</h1>;
};

var ele = <h1 className="firstAttribute">Hello Sahosoft !!!</h1>;

function changeBgColor() {
  document.getElementById("heading").style.backgroundColor = "red";
}

const colorStyle = {
  color: "red",
  backgroundColor: "pink",
  fontStyle: "italic",
};

reactDOM.render(
  <>
    {ele}
    <Header />
    <Demo />
    <Student />

    <h1 id="heading" className="head">
      Hello World !!!.This is H1 element.
    </h1>
    <p>This is paragraph element.</p>

    <input type="text" placeholder="Enter your Name" />
    <button onClick={changeBgColor}>Click Me</button>
    <Footer />

    <div
      style={{
        color: "red",
        fontStyle: "italic",
        fontSize: "bold",
        fontFamily: "sans-serif",
      }}
    >
      This is Div Tag.
    </div>

    <div style={colorStyle}>This is Div 2 Tag Element.</div>
  </>,
  document.getElementById("root")
);
