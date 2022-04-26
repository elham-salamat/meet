import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        eventCount: 32, 
    };

    handleCountChanged = (event) => {
        const value = event.target.value;

        if (value < 1 || value > 32) {
            this.setState({
                errorText: 'Please choose a number between 1 and 32'
            })            
        } else {
            this.setState({
                eventCount: value,
                errorText: ''
            })
        }

        
        this.props.updateEventsCount(value)
    }

    render() {
        return (
            <div>
                <ErrorAlert text={this.state.errorText} />
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