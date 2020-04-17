import React, { Component } from "react";

export default class Align extends Component {
  constructor() {
    super();

    this.state = {
      position: "center"
    };
    this.changePosition = this.changePosition.bind(this);
  }

  changePosition(arg) {
    this.setState({
      position: arg
    });
  }
  render() {
    return (
      <div>
        <h1>Align</h1>
        <button onClick={() => this.changePosition("left")}>Left</button>
        <button onClick={() => this.changePosition("center")}>Center</button>
        <button onClick={() => this.changePosition("right")}>Right</button>
        <h1 style={{ textAlign: this.state.position }}>
          {this.state.position}
        </h1>
      </div>
    );
  }
}
