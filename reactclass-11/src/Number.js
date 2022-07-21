import { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

export default class Number extends Component {
  render() {
    return (
      <>
        <h2>Number Component !!!</h2>
        {/* <div>
          {this.props.numList.map((num, index) => {
            return <p key={index}>{num}</p>;
          })}
        </div> */}
        <h2>Id: {this.props.Std.id}</h2>
        <h2>City: {this.props.Std.city}</h2>
      </>
    );
  }
}

// Number.propTypes = {
//   Std: PropTypes.objectOf(PropTypes.string),
// };

Number.propTypes = {
  Std: PropTypes.exact({ id: PropTypes.number, city: PropTypes.string }),
};
