import react, { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = { isActive: true };
  }
  render() {
    return (
      <>
        {this.state.isActive === true ? (
          <h1>I am Active</h1>
        ) : (
          <h1>I am Not Active</h1>
        )}

        <button
          onClick={() => {
            this.setState({ isActive: !this.state.isActive });
          }}
        >
          Toggle
        </button>
      </>
    );
  }
}
