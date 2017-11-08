import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppTabs from './AppTabs';
import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Quick JIRA" showMenuIconButton={false}/>
          <AppTabs />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
