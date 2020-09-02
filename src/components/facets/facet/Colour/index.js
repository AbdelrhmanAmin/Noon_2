import React, { Component } from "react";
class Colour extends Component {
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
        <div id="colorGrider" ref={this.div}>
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
