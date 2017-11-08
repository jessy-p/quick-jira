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
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Key</TableHeaderColumn>
        <TableHeaderColumn colSpan="3">Title</TableHeaderColumn>
        <TableHeaderColumn>Priority</TableHeaderColumn>
        <TableHeaderColumn>Assignee</TableHeaderColumn>
        <TableHeaderColumn>Reporter</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn colSpan="3">Comment</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {props.issues.map(function(issue, i){
          return <QueryResultRow issue={issue} key={i} />;
      })}
    </TableBody>
  </Table>
);

export default QueryResults;
