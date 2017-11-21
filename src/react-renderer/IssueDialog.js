import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class IssueDialog extends Component {

  render() {

    const CommentText = (props) => (
      <div>{props.comment}</div>
    );

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.onClose}
      />
    ];

    const blackText = {
      color: 'rgba(0,0,0,1)'
    };

    const rootStyle = {
      paddingTop: '10px'
    };

    const listItemStyle = {
      paddingTop: '5px',
      paddingBottom: '5px',
      fontSize : '14px'
    }

    if(this.props.issue != null) {
      return (
        <Dialog
          title={this.props.issue.title}
          modal={false}
          actions={actions}
          open={this.props.open}
          autoScrollBodyContent={true}>
          <div style={rootStyle}>
          <GridList
            cellHeight={50}
            cols={4}>
              <GridTile
                key="Key"
                title={this.props.issue.key}
                titleBackground="rgba(255,255,255,1)"
                titleStyle={blackText}
                cols={1}
              >
              </GridTile>
              <GridTile
                key="Priority"
                title={this.props.issue.priority}
                titleBackground="rgba(255,255,255,1)"
                titleStyle={blackText}
                cols={1}
              >
              </GridTile>
              <GridTile
                key="Status"
                title={this.props.issue.status}
                titleBackground="rgba(255,255,255,1)"
                titleStyle={blackText}
                cols={2}
              >
              </GridTile>
              <GridTile
                key="Assignee"
                title="Assignee"
                subtitle={this.props.issue.assignee}
                titleBackground="rgba(255,255,255,1)"
                titleStyle={blackText}
                subtitleStyle={blackText}
                cols={2}
              >
              </GridTile>
              <GridTile
                key="Reporter"
                title="Reporter"
                subtitle={this.props.issue.reporter}
                titleBackground="rgba(255,255,255,1)"
                titleStyle={blackText}
                subtitleStyle={blackText}
                cols={2}
              >
              </GridTile>
          </GridList>
          </div>
          <List>
            <Subheader>Comments</Subheader>
            {this.props.issue.comments.slice(0).reverse().map(function(comment, i){
              return <ListItem key={i}
                  primaryText={comment.author}
                  secondaryText={<CommentText comment={comment.comment}/>}
                  innerDivStyle={listItemStyle}
                />;
            })}
          </List>
        </Dialog>
      );
    } else return null;

  }

}

export default IssueDialog;
