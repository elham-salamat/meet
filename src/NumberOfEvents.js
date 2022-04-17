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
                
                <lable>
                    Number of Events
                </lable>
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