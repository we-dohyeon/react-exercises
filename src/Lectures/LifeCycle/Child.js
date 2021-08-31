import React, { Component } from "react";
import "./Child.scss";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      childCount: 0,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  updateCount = () => {
    this.setState({ childCount: this.state.childCount + 1 });
  };

  render() {
    return (
      <div className="Child">
        <div>
          <p>Child!</p>
          <p>Count: {this.state.childCount}</p>
          <button onClick={this.updateCount}>child plus</button>
        </div>
      </div>
    );
  }
}
