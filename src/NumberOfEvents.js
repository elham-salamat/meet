import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        eventCount: 32 
    };

    handleCountChanged = (event) => {
        const value = event.target.value;
        this.setState({
            eventCount: value
        })
        
        this.props.updateEventsCount(value)
    }

    render() {
        return (
            <div>
                
                <label>
                    Number of Events
                </label>
                <input 
                    type="number"
                    className="count"
                    value={this.state.eventCount}
                    onChange={this.handleCountChanged}
                />

            </div>
        )
    }
}

export default NumberOfEvents;