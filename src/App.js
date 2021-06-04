import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOperation: undefined,
      toCalculate: [],
      prevNumber: null,
      numArr: [],
    };
  }

  handleOperation = (operation) => {
    let prevNumberCopy = this.state.prevNumber;
    prevNumberCopy = this.state.numArr.join("");

    this.setState({
      currentOperation: operation,
      prevNumber: prevNumberCopy,
      numArr: [],
    });
  };

  handleNumber = (number) => {
    let numArrCopy = this.state.numArr;
    numArrCopy.push(number);
    this.setState({
      numArr: numArrCopy,
    });
  };

  handleClear = () => {
    this.setState({
      currentOperation: undefined,
      numArr: [],
      prevNumber: null,
    });
  };

  render() {
    let current = this.state.numArr;

    let renderDisplay = () => {
      return current.length > 0
        ? current.join("")
        : this.state.prevNumber
        ? this.state.prevNumber
        : 0;
    };
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div id="display" className="col text-right">
              {renderDisplay()}
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                id="clear"
                className="btn btn-info btn-custom"
                onClick={this.handleClear}
              >
                C
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-info">
                +/-
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-info">
                %
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="divide"
                className="btn btn-warning"
                onClick={() => this.handleOperation("/")}
              >
                /
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                id="seven"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(7)}
              >
                7
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="eight"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(8)}
              >
                8
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="nine"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(9)}
              >
                9
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="multiply"
                className="btn btn-warning"
                onClick={() => this.handleOperation("*")}
              >
                X
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                id="four"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(4)}
              >
                4
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="five"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(5)}
              >
                5
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="six"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(6)}
              >
                6
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="subtract"
                className="btn btn-warning"
                onClick={() => this.handleOperation("-")}
              >
                -
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                id="one"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(1)}
              >
                1
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="two"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(2)}
              >
                2
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="three"
                className="btn btn-secondary"
                onClick={() => this.handleNumber(3)}
              >
                3
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="add"
                className="btn btn-warning"
                onClick={() => this.handleOperation("+")}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                id="zero"
                className="btn btn-secondary zero-btn"
                onClick={() => this.handleNumber(0)}
              >
                0
              </button>
            </div>
            <div className="col-3">
              <button type="button" id="decimal" className="btn btn-secondary">
                .
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                id="equals"
                className="btn btn-warning btn-equals"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
