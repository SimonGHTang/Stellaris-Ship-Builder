import React from 'react';
import { Image } from 'semantic-ui-react';

import ModuleTypes from "../../enums/module-types.js";
import Laser_1 from "../images/Tech_lasers_1.png";

export default class ShipSection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      css: "module-slot",
      label: {}
    }
  }

  componentWillMount() {
    switch(this.props.info.type){
      case("WEAPON"):
        this.setState({css: this.state.css + " module-slot-weapon"});
        break;
      case("UTILITY"):
        this.setState({css: this.state.css + " module-slot-utility"});
        break;
      case("GUIDED"):
        this.setState({css: this.state.css + " module-slot-guided"});
        break;
      case("POINT_DEFENCE"):
        this.setState({css: this.state.css + " module-slot-point-defence"});
        break;
      default: 
        this.setState({css: "invisible"});
      
    }

    switch(this.props.info.key){
      case(ModuleTypes.SMALL_WEAPON.key):
          this.setState({label:  {as: "div", content: "S", ribbon: false, className:"orange-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.MEDIUM_WEAPON.key):
          this.setState({label:  {as: "div", content: "S", ribbon: false, className:"orange-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.LARGE_WEAPON.key):
          this.setState({label:  {as: "div", content: "S", ribbon: false, className:"orange-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.SMALL_DEFENCE.key):
          this.setState({label:  {as: "div", content: "S", ribbon: false, className:"green-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.MEDIUM_DEFENCE.key):
          this.setState({label:  {as: "div", content: "S", ribbon: false, className:"green-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.LARGE_DEFENCE.key):
          this.setState({label:  {as: "div", content: "S", ribbon: false, className:"green-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.AUXILIARY.key):
          this.setState({label:  {as: "div", content: "A", ribbon: false, className:"green-corner-icon", size: "mini"  } });
          break;
        case(ModuleTypes.GUIDED.key):
          this.setState({label:  {as: "div", content: "G", ribbon: false, className:"blue-corner-icon", size: "mini"  } });
          break;  
        case(ModuleTypes.POINT_DEFENCE.key):
          this.setState({label:  {as: "div", content: "P", ribbon: false, className:"red-corner-icon", size: "mini"  } });
          break;
    }
  }

  render () {
    return (
        <Image
          className={this.state.css} 
          src={Laser_1}
          size="small"
          label={this.state.label}
        />
    );
  }
}