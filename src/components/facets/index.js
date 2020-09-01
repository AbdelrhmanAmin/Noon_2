import React, { Component } from "react";
import "./style.css";
import Facet from "./facet";
class Facets extends Component {
  render() {
    return (
      <div>
        <Facet data={this.props.data} />
      </div>
    );
  }
}
export default Facets;
