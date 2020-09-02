import React, { Component } from "react";
class Fulfillment extends Component {
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
        <div>
          <div id="heading">
            <div id="headCtr">
              <h1>{this.props.name}</h1>
              <a>
                <i
                  onClick={this.toggler}
                  className="fa fa-angle-down fa-2x"
                  ref={this.btn}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <div id="drawer" ref={this.div}>
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
