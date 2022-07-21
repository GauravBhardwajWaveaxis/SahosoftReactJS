import React from "react";

export default function Layout(props) {
  console.log(props);
  return (
    <>
      <h3>Page Layout</h3>
      {props.children}
    </>
  );
}
