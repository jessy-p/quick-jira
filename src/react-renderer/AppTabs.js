import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import QueryContainer from './QueryContainer';

class AppTabs extends Component {

  render() {
    return (
      <Tabs>
        <Tab label="Home" >
          <QueryContainer />
        </Tab>
        <Tab label="Tab 2" >
        </Tab>
        <Tab label="Tab 3" >
        </Tab>
      </Tabs>
    );
  }
}

export default AppTabs;
