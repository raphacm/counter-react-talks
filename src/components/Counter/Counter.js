import React, { Component } from "react";
import Button from "../Button/Button";

class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        }}
      >
        <h1>{this.state.count}</h1>
        <div>
          <Button onClick={this.decreaseCount}>-</Button>
          <Button onClick={this.increaseCount}>+</Button>
        </div>
      </div>
    );
  }
}

export default Counter;
