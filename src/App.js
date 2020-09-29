import React, { Component } from "react";
import Facets from "./components/facets";
import Headroom from "./components/headroom";
import Body from "./components/content/body";
import Data from "./data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount = () => {
    const curr = this.myRef.current;
    {
      Data.map((x) => {
        if (x.hasOwnProperty("breadcrumbs")) {
          for (let i of x.breadcrumbs) {
            const span = document.createElement("span");
            span.innerHTML = " > " + i.name;
            curr.appendChild(span);
          }
          console.log(curr);
        }
      });
    }
  };
  render() {
    console.log(Data[0].breadcrumbs[0].code);
    return (
      <div id="main-app">
        <Headroom />
        <div className="bg1"></div>
        <div className="bg"></div>
        <div id="bg"></div>
        <nav id="dir" ref={this.myRef}>
          <span>Home </span>
        </nav>
        <div className="App">
          <div id="Facets">
            <Facets data={Data[0].facets} dir={Data[0].breadcrumbs[0].code} />
          </div>
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
