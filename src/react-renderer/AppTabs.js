import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import QueryContainer from './QueryContainer';
var dataService =  window.require('electron').remote.require('./dataService');

class AppTabs extends Component {

  updateTabs  = () => {
    dataService.getTabs().then((response) => {
      this.setState({tabs: response});
    });
  }

  constructor(props) {
    super(props);
     this.state = {
        tabs: [],
        query: ""
    };
    dataService.getTabs().then((response) => {
      this.setState({tabs: response});
    });
  }

  clearTabContent = (e) => {
    this.setState({query: ""});
  }

  handleTabChange = (e) => {
   this.setState({query: this.state.tabs[e.props.index-1].query});
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="Home" onActive={this.clearTabContent}>
          </Tab>
          {this.state.tabs.map((tab, i) => {
            return <Tab label={tab.title} key={i} onActive={this.handleTabChange}></Tab>
          })}
        </Tabs>
        <QueryContainer updateTabs={this.updateTabs} query={this.state.query}/>
      </div>
    );
  }
}

export default AppTabs;
