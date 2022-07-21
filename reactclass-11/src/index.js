import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// class Index extends Component {
//   render() {
//     return (
//       <>
//         <h1>Id: {this.props.id}</h1>
//         <h1>Name: {this.props.name}</h1>
//       </>
//     );
//   }
// }

// Index.propTypes = {
//   id: PropTypes.number,
// };

// Index.propTypes = {
//   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// };

// Index.propTypes = {
//   name: PropTypes.oneOf(["Chandan Sir", "Ajit Sir"]),
// };

// ReactDOM.render(
//   <>
//     <h1>Props Validations</h1>
//     <Index id="10" name="Gaurav bhardwaj" />
//   </>,
//   document.getElementById("root")
// );

// class Demo extends Component {
//   render() {
//     return (
//       <>
//         <h2>This Is Demo Class Component.</h2>
//       </>
//     );
//   }
// }

// class Index extends Component {
//   render() {
//     return (
//       <>
//         <h1>This Is Index Class Component.</h1>
//         {this.props.children}
//       </>
//     );
//   }
// }

// Index.propTypes = {
//   children: PropTypes.element,
// };

// ReactDOM.render(
//   <>
//     <Index>
//       <Demo />
//       <Demo />
//       <h1>Test 1</h1>
//       <h1>Test 2</h1>
//     </Index>
//   </>,
//   document.getElementById("root")
// );

import Number from "./Number";

ReactDOM.render(
  <>
    {/* <Number numList={["43", "56", "43", "65", "34", "676"]} /> */}

    <Number Std={{ id: 10, city: "Bangalore" }} />
  </>,
  document.getElementById("root")
);
