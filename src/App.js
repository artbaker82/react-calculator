import React, { Component } from "react";
import "../src/styles/styles.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col text-center">Input displayed here</div>
          </div>
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-info">
                Clear
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
              <button type="button" className="btn btn-warning">
                /
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                7
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                8
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                9
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-warning">
                X
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                4
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                5
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                6
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-warning">
                -
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                1
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                2
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                3
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-warning">
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-secondary zero-btn">
                0
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-secondary">
                .
              </button>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-warning">
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
