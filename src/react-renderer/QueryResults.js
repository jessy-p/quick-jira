import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import QueryResultRow from './QueryResultRow';

const QueryResults = (props) => (
  <Table selectable={true} >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Key</TableHeaderColumn>
        <TableHeaderColumn colSpan="2">Title</TableHeaderColumn>
        <TableHeaderColumn>Priority</TableHeaderColumn>
        <TableHeaderColumn>Assignee</TableHeaderColumn>
        <TableHeaderColumn>Reporter</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn colSpan="2">Comment</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {props.issues.map(function(issue, i){
          return <QueryResultRow issue={issue} key={i} onClick={props.onClick.bind(this, i)}/>;
      })}
    </TableBody>
  </Table>
);

export default QueryResults;
