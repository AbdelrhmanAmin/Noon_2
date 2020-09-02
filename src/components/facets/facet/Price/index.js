import React, { Component } from "react";

class Price extends Component {
  render() {
    return (
      <div>
        <div id="heading">
          <div id="headCtr">
            <h1>{this.props.name}</h1>
          </div>
        </div>
        <div id="input-wrapper">
          <input
            type="number"
            placeholder="1"
            min="1"
            max={this.props.max}
            id="textInput"
          />
          <strong>TO</strong>
          <input
            type="number"
            placeholder={this.props.max}
            id="textInput"
            min="1"
            max={this.props.max}
          />
        </div>
      </div>
    );
  }
}
export default Price;
