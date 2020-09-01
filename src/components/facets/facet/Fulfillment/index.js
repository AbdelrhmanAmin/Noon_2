import React, { Component } from "react";
import "./style.css";
class Fulfillment extends Component {
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
              return x.code == "1" ? (
                <label id="checkbox-container">
                  <div id="left-row">
                    <input type="checkbox" />
                    <img
                      src="https://k.nooncdn.com/s/app/2019/noon-bigalog/1c8daaae936a0074b275f82bf67a59fa5a6c53be/static/images/noon-express-en.png"
                      alt="noon-express"
                      style={{
                        width: "71.734px",
                        height: "17px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                </label>
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Fulfillment;
