import React, { Component } from 'react';
import QueryForm from './QueryForm';
import QueryResults from './QueryResults';
import IssueDialog from './IssueDialog';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
var JIRAService =  window.require('electron').remote.require('./JIRAService');
var dataService =  window.require('electron').remote.require('./dataService');

class QueryContainer extends Component {

  constructor(props) {
    super();
    this.state = {
      query: props.query,
      results: [],
      dialogOpen: false,
      dialogData: null,
      popupOpen: false,
      notifyOpen: false,
      notifyMessage: ''
    };
  }

  handleSubmit = () => {
    JIRAService.findIssues(this.state.query).then((response) => {
      this.setState({results : response.data});
    });
  }

  componentWillReceiveProps =(nextProps) => {
    if(nextProps.query !== this.state.query) {
      this.setState({query : nextProps.query});
      if(nextProps.query !== "") {
        JIRAService.findIssues(nextProps.query).then((response) => {
          this.setState({results : response.data});
        });
      } else {
        this.setState({results : []})
      }
    }
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

  handleSave = (e) => {
    e.preventDefault();
    this.setState({ popupOpen: true })
  }

  doSave = (e) => {
    e.preventDefault();
    dataService.saveTab(this.state.query, this.state.queryTitle, this.state.querySequence).then((response) => {
      this.setState({ notifyOpen: true , notifyMessage: "Saved the tab", popupOpen: false})
      this.props.updateTabs();
    });
  }

  handlePopupClose = (e) => {
    this.setState({ popupOpen: false })
  }

  handleNotifyClose = (e) => {
    this.setState({ notifyOpen: false })
  }

  render() {
    const popupActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handlePopupClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onClick={this.doSave}
      />,
    ];

    return (
      <div>
        <QueryForm onSubmit={this.handleSubmit} onChange={this.handleChange}  onSave={this.handleSave} query={this.state.query} />
        <QueryResults issues={this.state.results} onClick={this.handleRowClick} />
        <IssueDialog issue={this.state.dialogData} open={this.state.dialogOpen} onClose={this.handleClose} />
        <Dialog title="Save Query" actions={popupActions} modal={true} open={this.state.popupOpen}>
          <TextField defaultValue={this.state.query} floatingLabelText="Query" />
          <TextField hintText="Enter the title for your Tab" floatingLabelText="Title" onChange={e => this.setState({ queryTitle: e.target.value })} />
          <TextField hintText="Enter the sequence for your Tab" floatingLabelText="Sequence" onChange={e => this.setState({ querySequence: e.target.value })} />
        </Dialog>
        <Snackbar open={this.state.notifyOpen} message={this.state.notifyMessage} autoHideDuration={3000} onRequestClose={this.handleNotifyClose} />
      </div>
    );
  }
}

export default QueryContainer;
