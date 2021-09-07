import React, { Component } from "react";
import "./Buttons.scss";

class Buttons extends Component {
  render() {
    const { handlePageClick } = this.props;

    return (
      <div className="pageBtn">
        <button onClick={handlePageClick} data-idx={0}>
          1
        </button>
        <button button onClick={handlePageClick} data-idx={1}>
          2
        </button>
        <button button onClick={handlePageClick} data-idx={2}>
          3
        </button>
        <button button onClick={handlePageClick} data-idx={3}>
          4
        </button>
        <button button onClick={handlePageClick} data-idx={4}>
          5
        </button>
      </div>
    );
  }
}

export default Buttons;
