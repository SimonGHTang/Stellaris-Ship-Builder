import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import Modules from './components/modules/modules.js';
import ShipTypes from './enums/ship-types.js';
import CorvetteBuilder from './components/builder/corvette-builder';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      shipType: ShipTypes.CORVETTE
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} >
              <Modules />
            </Grid.Column>

            <Grid.Column width={10}>
              { this.state.shipType === ShipTypes.CORVETTE ? <CorvetteBuilder /> : (null) }
            </Grid.Column >

            <Grid.Column width={3}>
              <Segment color='red'>Red</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
