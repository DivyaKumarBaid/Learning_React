import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mons: [
        {
          name: 'pain',
          id: 'you_shall_know_pain'
        },
        {
          name: 'Itachi',
          id: 'Mangekeyo_Sharinghan'
        },
        {
          name: 'Madara',
          id: 'This_world_is_full_of_pain'
        }
      ]
    };
  }
  render() {
    return (
      <div className='App'>
        <p>{this.state.mons.map(naming => (
          <h1 key={naming.id}>{naming.name}</h1>
        ))}</p>
      </div>
    );
  }
}

export default App;
