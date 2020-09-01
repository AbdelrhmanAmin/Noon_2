import React, { Component } from "react";
import "./style.css";
class Category extends Component {
  render() {
    return (
      <div>
        <div>
          <div id="heading">
            <div id="headCtr">
              <h1>{this.props.name}</h1>
              <a>
                <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div id="drawer">
            {this.props.data.map((x) => {
              return (
                <label id="checkbox-container">
                  <div id="left-row">
                    <span>{x.name}</span>
                  </div>
                  <div id="right-row">({x.count})</div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Category;
