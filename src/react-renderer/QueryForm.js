import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const QueryForm = (props) => (
  <Paper style={{width:'90%', height:'auto', display: 'inline-block', margin: 20, padding: 10}} zDepth={3}>
    <TextField
      multiLine={true}
      floatingLabelText="JQL Query"
      defaultValue={props.query}
      fullWidth={true}
      rows={2}
      onChange={props.onChange}
    />
    <RaisedButton label="Submit" primary={true} onClick={props.onSubmit} />
  </Paper>
);

export default QueryForm;
