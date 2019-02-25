import React, { Component } from 'react';
import { Sidebar, Menu, Image, Header, Icon, Segment } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Modules from './components/modules/modules';

import shipSelect from './components/builder/ship-select';
import corvetteBuilder from './components/builder/corvette-builder';

import ShipStats from './components/ship-stats/ship-stats';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar.Pushable>
          <Sidebar as={Menu} direction='left' vertical width='thin'>
            <Menu.Item> 
              <Modules />
            </Menu.Item>
          </Sidebar>
        
          <Sidebar.Pusher width="80%">
            <BrowserRouter>
              <Switch>
                <Route exact path = "/" component = {shipSelect} />
                <Route path = "/corvette-builder" component = {corvetteBuilder} />
                <Route component = {shipSelect} />
              </Switch>
            </BrowserRouter>
          </Sidebar.Pusher>

          <Sidebar as={Menu} direction='right' vertical>
            <ShipStats/>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
