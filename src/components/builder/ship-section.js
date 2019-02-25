import React from 'react';
import { Grid } from 'semantic-ui-react';

import ModuleSlot from "./module-slot.js";

export default class ShipSection extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="ship-section">
        <Grid className="ship-section-top">
            <Grid.Row className="ship-section-top-upper-row">
              <div className="ship-section-title">{this.props.shipSection.name}</div>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot1} />
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot2}/>
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot3}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot4}/>  
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot5}/>
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot6}/>
              </Grid.Column>
            </Grid.Row>
        </Grid>

        <Grid className="ship-section-bottom">
            <Grid.Row>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot7}/>
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot8}/>
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot9}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot10}/>  
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot11}/>
              </Grid.Column>
              <Grid.Column className="no-padding" width={5}>
                <ModuleSlot info={this.props.shipSection.slot12}/>
              </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}