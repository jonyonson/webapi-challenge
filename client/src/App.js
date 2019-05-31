import React from 'react';
import axios from 'axios';
import Project from './components/Project';
import './App.css';

class App extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => {
        const projects = res.data;
        // console.log(projects);
        this.setState({ projects });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const projects = this.state.projects;
    return (
      <div className="App">
        <h1>All Projects</h1>
        <p>Click project name for more info.</p>
        {projects.map(project => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    );
  }
}

export default App;
