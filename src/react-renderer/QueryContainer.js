import React, { Component } from 'react';
import QueryForm from './QueryForm';
import QueryResults from './QueryResults';
var JIRAService =  window.require('electron').remote.require('./JIRAService');

class QueryContainer extends Component {

  constructor() {
    super();
    this.state = {
      query: "",
      results: []
    };
  }

  handleSubmit = () => {
    JIRAService.findIssues(this.state.query).then((response) => {
      this.setState({results : response.data});
    });
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div>
        <QueryForm onSubmit={this.handleSubmit} onChange={this.handleChange} query={this.state.query} />
        <QueryResults issues={this.state.results}/>
      </div>
    );
  }
}

export default QueryContainer;
