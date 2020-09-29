import React, { Component } from "react";
import "./style.css";
class Card extends Component {
  render() {
    return (
      <div id={this.props.display == "GRID" ? "card-con" : "card-row-con"}>
        {this.props.display == "GRID" ? (
          <div id="display-grid">
            <div className="product-img">
              <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1565249621/N26724517A_1.jpg" />

              <i className="fa fa-heart"></i>
            </div>
            <div id="details-container">
              <div className="name">
                <div style={{ overflow: "hidden" }}>
                  <div>
                    <span>
                      Xiaomi Mi Band 4 Waterproof Fitness Tracker Global
                      Version…{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="price-row">
                <p>
                  <span className="current">
                    <span className="currency">AED</span>
                    <span className="value">78.80</span>
                  </span>
                  <span className="previous">
                    <span className="currency">AED</span>
                    <span className="value">109</span>
                  </span>
                </p>
              </div>
              <div className="fulfillment">
                <img
                  src="https://k.nooncdn.com/s/app/2019/noon-bigalog/948ce9cf942c2f93474fb11864256b39d4000acf/static/images/noon-express-en.png"
                  className="ful-img"
                />
                <span className="discount">
                  <span className="bg"></span>
                  <span className="value">53% OFF</span>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div id="display-row">
            <div className="product-img">
              <img src="https://k.nooncdn.com/t_desktop-thumbnail-v2/v1565249621/N26724517A_1.jpg" />
            </div>
            <div>
              <div className="name">
                <div style={{ overflow: "hidden" }}>
                  <div>
                    <span>
                      <span style={{ color: "#7e859b" }}>Xiaomi</span> <br></br>{" "}
                      Mi Band 4 Waterproof Fitness Tracker Global Version…{" "}
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="https://k.nooncdn.com/s/app/2019/noon-bigalog/948ce9cf942c2f93474fb11864256b39d4000acf/static/images/noon-express-en.png"
                className="ful-img"
              />
            </div>
            <div id="details-container">
              <div style={{ marginBottom: "5px" }}>
                <p>
                  <span className="current">
                    <span className="currency">AED</span>
                    <span className="value">78.80</span>
                  </span>
                </p>
              </div>
              <div>
                <span className="previous">
                  <span className="currency">AED</span>
                  <span className="value">109</span>
                </span>
                <span className="discount">
                  <span className="bg"></span>
                  <span className="value">53% OFF</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Card;
