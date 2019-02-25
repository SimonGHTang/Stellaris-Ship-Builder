import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import Modules from './components/modules/modules';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} >
              <Modules/>
            </Grid.Column>

            <Grid.Column width={10}>
              <Segment color='green'>Green</Segment>
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
