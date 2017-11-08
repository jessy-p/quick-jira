import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const QueryResultRow = (props) => (
  <TableRow>
    <TableRowColumn>{props.issue.key}</TableRowColumn>
    <TableRowColumn colSpan="3">{props.issue.title}</TableRowColumn>
    <TableRowColumn>{props.issue.priority}</TableRowColumn>
    <TableRowColumn>{props.issue.assignee}</TableRowColumn>
    <TableRowColumn>{props.issue.reporter}</TableRowColumn>
    <TableRowColumn>{props.issue.status}</TableRowColumn>
    <TableRowColumn colSpan="3">{props.issue.comments[0]}</TableRowColumn>
  </TableRow>
);

export default QueryResultRow;
