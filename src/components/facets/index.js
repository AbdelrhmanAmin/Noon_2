import React, { Component } from "react";
import "./style.css";
import Facet from "./facet";
class Facets extends Component {
  render() {
    return (
      <div>
        <Facet data={this.props.data} dir={this.props.dir} />
      </div>
    );
  }
}
export default Facets;
