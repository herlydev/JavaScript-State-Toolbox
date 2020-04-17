import React, { Component } from "react";

function Message(props) {
  if (props.value) {
    return <h1>Hello</h1>;
  } else {
    return <h1>Goodbye</h1>;
  }
  props.value;
}

export default class Toogle extends Component {
  constructor(props) {
    super(props);

    this.state = { value: true };
  }

  handleClick = () => {
    this.setState({
      value: !this.state.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Toggle</h1>
        <button onClick={this.handleClick}>toggle</button>
        <Message value={this.state.value} />
      </div>
    );
  }
}
