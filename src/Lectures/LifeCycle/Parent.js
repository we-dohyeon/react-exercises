import React, { Component } from "react";
import Child from "./Child";
import "./Parent.scss";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentCount: 0,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  updateCount = () => {
    this.setState({ parentCount: this.state.parentCount + 1 });
  };

  render() {
    return (
      <div className="Parent">
        <div>
          <p>parent</p>
          <p>Count: {this.state.parentCount}</p>
          <button onClick={this.updateCount}>parent plus</button>
        </div>
        <Child />
      </div>
    );
  }
}
