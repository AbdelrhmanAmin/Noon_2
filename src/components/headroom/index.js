import React, { Component } from "react";
import Bar from "./supportBar/index";
import Search from "./Search/index";
import Navmenu from "./Navmenu/index";
import "./style.css";
class Headroom extends Component {
  render() {
    return (
      <div id="headroom">
        <Bar />
        <Search />
        <Navmenu />
      </div>
    );
  }
}
export default Headroom;
