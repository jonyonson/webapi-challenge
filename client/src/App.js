import React from 'react';
import axios from 'axios';
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
        this.setState({ projects });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div>Hello World</div>
      </div>
    );
  }
}

export default App;
