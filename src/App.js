import React, { Component } from 'react';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {extractLocations, getEvents} from './api';

import './App.css';
import './nprogress.css';

class App extends Component {
  state = {
    events: [], 
    locations: [],
    numberOfEvents: 32, 
    currentLocation: 'all'
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(this.mounted) {
        this.setState({
          events, 
          locations: extractLocations(events)
        });  
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      if(this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount), 
          currentLocation: location
        });
      }
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents: numberOfEvents
    });
    this.updateEvents(this.state.currentLocation, numberOfEvents)
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />        
        <NumberOfEvents updateEventsCount={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );

  }
}

export default App;
