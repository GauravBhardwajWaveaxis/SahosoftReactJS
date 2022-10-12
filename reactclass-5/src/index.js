// import React, { createElement } from "react";
// import ReactDOM from "react-dom";
// import Student from "./Student";

// let ele1 = <h1>This Is Welcome Page !!!</h1>;

// let ele2 = React.createElement("h1", null, "Welcome to Sahosoft Solutions");

// let ele3 = React.createElement(
//   "h1",
//   null,
//   createElement("h1", null, "Welcome to Sahosoft Solutions")
// );

// ReactDOM.render(
//   <>
//     {ele1}

//     {ele2}

//     {ele3}
//     <Student />
//   </>,
//   document.getElementById("root")
// );

import React from "react";
import { createElement } from "react";
import ReactDOM from "react-dom";
import Student from './Student'


let ele = <h1>This is Welcome Page ...</h1>

let Ele1 = createElement('div', null, 'This Is div Element')

let Ele2 = createElement('div', null, createElement('h2', null, 'This H2 Nested React Create Element'))

ReactDOM.render(
  <>
    {ele}
    {Ele1}
    {Ele2}
    <Student />
  </>, document.getElementById('root')
)