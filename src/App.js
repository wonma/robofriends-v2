import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbar from './Searchbar';
import Scroll from './Scroll';
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  filteredRobots = () => {
    return robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });
  };

  onSearchChange = event => {
    this.setState({ searchValue: event.target.value });
  };

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
