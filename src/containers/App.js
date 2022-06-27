import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbar from '../components/Searchbar';
import Scroll from '../components/Scroll';
import Loader from '../components/Loader';
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
      .then(users => {
        setTimeout(() => {
          this.setState({ robots: users });
        }, 1000);
      });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='tc'>RoboFriends</h1>
        <Searchbar onSearchChange={this.onSearchChange} />
        {this.state.robots.length ? (
          <Scroll>
            <Cardlist robots={this.filteredRobots()} />
          </Scroll>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default App;
