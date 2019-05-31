import React, { Component } from 'react';
// import axios from 'axios';

class Action extends Component {
  state = {};

  render() {
    return (
      <div className="action-item">
        <div className="action-item-description">
          {this.props.action.description}
        </div>
        <div>Notes: {this.props.action.notes}</div>
      </div>
    );
  }
}

export default Action;
