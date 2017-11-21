import React from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const wrapStyle  = {whiteSpace : 'wrap'};

const QueryResultRow = (props) => (
  <TableRow onMouseUp={props.onClick}>
    <TableRowColumn style={wrapStyle}>{props.issue.key}</TableRowColumn>
    <TableRowColumn colSpan="2" style={wrapStyle}>{props.issue.title}</TableRowColumn>
    <TableRowColumn>{props.issue.priority}</TableRowColumn>
    <TableRowColumn>{props.issue.assignee}</TableRowColumn>
    <TableRowColumn>{props.issue.reporter}</TableRowColumn>
    <TableRowColumn>{props.issue.status}</TableRowColumn>
    <TableRowColumn colSpan="2" style={wrapStyle}>{props.issue.comments[props.issue.comments.length-1].author} : {props.issue.comments[props.issue.comments.length-1].comment}
    </TableRowColumn>
  </TableRow>
);

export default QueryResultRow;
