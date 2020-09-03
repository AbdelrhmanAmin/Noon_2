import React, { Component } from "react";
import Colour from "./Colour";
import Category from "./Category";
import Fulfillment from "./Fulfillment";
import Generic from "./Generic";
import Price from "./Price";
// const compMap = {
//   Colour: <Colour colourData={v.data} name={v.name} />,
//   Category: <Category name={v.name} data={v.data} />,
//   Fulfillment: <Fulfillment name={v.name} data={v.data} />,
//   Price: <Price name={v.name} min={v.data.min} max={v.data.max} />,
//   "New Arrivals": <Generic name={v.name} data={v.data} />,
//   Seller: <Generic name={v.name} data={v.data} />,
// };
// {this.props.data.map((v) => {
//   Object.entries(compMap).map((x) => {
//     if (v.name == x[0]) {
//       let comp = x[1];
//       console.log(comp);
//       return <comp />;
//     }
//   });
// })}
class Facet extends Component {
  constructor(props) {
    super(props);
    this.div = React.createRef();
  }

  render() {
    return (
      <div ref={this.div} id="father">
        {this.props.data.map((v) => {
          if (v.name == "Colour") {
            return <Colour colourData={v.data} name={v.name} />;
          }
          if (v.name == "Category") {
            return (
              <Category name={v.name} data={v.data} dir={this.props.dir} />
            );
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
