import React, { Component } from "react";
class Generic extends Component {
  constructor(props) {
    super(props);
    this.div = React.createRef();
    this.btn = React.createRef();
  }
  state = {
    collapse: true,
  };
  toggler = (e) => {
    const target = this.div.current;
    const icon = this.btn.current;
    this.setState({ collapse: !this.state.collapse });
    if (this.state.collapse) {
      target.style.display = "none";
      icon.className = "fa fa-angle-up fa-2x";
    } else {
      target.style.display = "grid";
      icon.className = "fa fa-angle-down fa-2x";
    }
  };
  render() {
    return (
      <div>
        <div id="heading">
          <div id="headCtr">
            <h1>{this.props.name}</h1>
            <a>
              <i
                className="fa fa-angle-down fa-2x"
                aria-hidden="true"
                ref={this.btn}
                onClick={this.toggler}
              ></i>
            </a>
          </div>
        </div>
        <div id="drawer" ref={this.div}>
          {this.props.data.map((x) => {
            return (
              <label id="checkbox-container">
                <div id="left-row">
                  <input type="checkbox" />
                  <span>{x.name}</span>
                </div>
                <div id="right-row">({x.count})</div>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Generic;
