import React from "react";

import ShipSection from "./ship-section.js";
import CorvetteShipSections from "../../enums/corvette-ship-sections.js";

export default class CorvetteBuilder extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ship_section_1: CorvetteShipSections.INTERCEPTOR
    }
  }

  render() {
      return (
          <React.Fragment>
            <ShipSection shipSection={this.state.ship_section_1}/>
          </React.Fragment>
      );
  }
}