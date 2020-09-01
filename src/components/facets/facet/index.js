import React, { Component } from "react";
import "./style.css";
import Colour from "./Colour";
import Category from "./Category";
import Fulfillment from "./Fulfillment";
import Generic from "./Generic";
import Price from "./Price";
class Facet extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((v) => {
          console.log(v);
          if (v.name == "Colour") {
            return <Colour colourData={v.data} name={v.name} />;
          }
          if (v.name == "Category") {
            return <Category name={v.name} data={v.data} />;
          }
          if (v.name == "Fulfillment") {
            return <Fulfillment name={v.name} data={v.data} />;
          }
          if (v.name == "New Arrivals" || v.name == "Seller") {
            return <Generic name={v.name} data={v.data} />;
          }
          if (v.name == "Price") {
            return <Price name={v.name} min={v.data.min} max={v.data.max} />;
          }
        })}
      </div>
    );
  }
}
export default Facet;

/*
    facet.name ? 
    const compMap = {
    category: Category, (DONE///////////////////)
    Colour: Colour, (DONE///////////////////)
    Fulfillment: Fulfillment,  (DONE///////////////////)
    Price: Price, (DONE///////////////////)
    New Arrivals: generic, (DONE///////////////////)
    Seller: generic,(DONE///////////////////)

    }
*/
