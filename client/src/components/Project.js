import React, { Component } from 'react';
import axios from 'axios';
import Action from './Action';
class Project extends Component {
  state = {
    showProjectInfo: false,
    actions: [],
  };

  componentDidMount() {
    const projectId = this.props.project.id;
    axios
      .get(`http://localhost:5000/api/projects/${projectId}`)
      .then(res => {
        console.log(res.data);
        const actions = res.data;
        this.setState({ actions });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleProjectInfo = () => {
    this.setState(prevState => ({
      showProjectInfo: !prevState.showProjectInfo,
    }));
  };

  render() {
    return (
      <div className="App__project" onClick={this.toggleProjectInfo}>
        <h2>{this.props.project.name}</h2>
        {this.state.showProjectInfo && (
          <>
            <div className="App__project__description">
              {this.props.project.description}
            </div>
            <h3>Actions</h3>
            {this.state.actions.map(action => {
              return <Action key={action.id} action={action} />;
            })}
          </>
        )}
      </div>
    );
  }
}

export default Project;
