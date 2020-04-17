import React, { Component } from "react";

export default class ShowHide extends Component {
  constructor() {
    super();

    this.state = {
      content: "Hello",
      showContent: true
      // title: "Show"
    };
  }

  // changeTitle = () => {
  //   this.setState({ title: "Hide" });
  // };

  toggleContent = () => {
    if (this.state.showContent) {
      this.setState({ content: [], showContent: false });
    } else {
      this.setState({ content: "Hello", showContent: true });
    }
  };
  render() {
    return (
      <div className="app">
        <h2> Show and Hide</h2>

        <button onClick={this.toggleContent}>Hide</button>

        <h2>{this.state.content}</h2>
      </div>
    );
  }
}
