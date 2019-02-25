import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} >
              <Segment className='segment' color='blue'>Blue</Segment>
            </Grid.Column>

            <Grid.Column width={7}>
              <Segment className='segment' color='green'>Green</Segment>
            </Grid.Column >

            <Grid.Column width={5}>
              <Segment className='segment' color='red'>Red</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
