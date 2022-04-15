import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import './App.css';



class App extends Component {
  state = {
    events: [], 
    locations: []
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    );

  }
}

export default App;
