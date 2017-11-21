import React, { Component } from 'react';
import QueryForm from './QueryForm';
import QueryResults from './QueryResults';
import IssueDialog from './IssueDialog';
var JIRAService =  window.require('electron').remote.require('./JIRAService');

class QueryContainer extends Component {

  constructor() {
    super();
    this.state = {
      query: "",
      results: [],
      dialogOpen: false,
      dialogData: null
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

  handleClose = (e) => {
    this.setState({ dialogOpen: false })
  }

  handleRowClick = (index, e) => {
    e.preventDefault();
    this.setState({ dialogOpen: true , dialogData: this.state.results[index]})
  }

  render() {

    return (
      <div>
        <QueryForm onSubmit={this.handleSubmit} onChange={this.handleChange} query={this.state.query} />
        <QueryResults issues={this.state.results} onClick={this.handleRowClick} />
        <IssueDialog issue={this.state.dialogData} open={this.state.dialogOpen} onClose={this.handleClose} />
      </div>
    );
  }
}

export default QueryContainer;
