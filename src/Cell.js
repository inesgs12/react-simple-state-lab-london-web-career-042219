import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  clickCell = () => {
    this.setState({ color: "#333" })
  };

  render() {
    return (
      <div
        onClick={this.clickCell}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}