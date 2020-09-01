import React, { Component } from "react";
import "./style.css";
class Colour extends Component {
  render() {
    return (
      <div>
        <div id="heading">
          <div id="headCtr">
            <h1>{this.props.name}</h1>
            <a>
              <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div id="colorGrider">
          {this.props.colourData.map((x) => {
            return (
              <label id="container">
                <div style={{ color: x.code }} id="colorBox">
                  <img
                    src={`https://a.nooncdn.com/cms/pages/20181025/0ce4c3a5d392155933d4571ef91fc179/${x.code}.svg`}
                    id="colorSvg"
                  />
                  <div id="info-color">
                    <div>{x.code}</div>
                    <div style={{ color: "#7e859b" }}>({x.count})</div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Colour;
