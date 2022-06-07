import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import EventList from './EventList';
import EventGenre from './EventGenre';
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    });

    return data;
  };



  render() {

    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} 
        />        
        <NumberOfEvents 
          updateEventsCount={this.updateNumberOfEvents} 
        />
        <h4>Events in each city</h4>
        <div className='data-vis-wrapper'>
        <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart width={730} height={250}
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );

  }
}

export default App;
