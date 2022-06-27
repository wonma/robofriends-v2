import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbar from './Searchbar';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchValue: ''
    };
  }

  filteredRobots = () => {
    const { robots, searchValue } = this.state;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  onSearchChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    return (
      <div className='container'>
        <h1 className='tc'>RoboFriends</h1>
        <Searchbar onSearchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={this.filteredRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default App;
