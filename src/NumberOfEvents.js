import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        number: null 
    };

    handleDisplayLimitChanged = (event) => {
        const value = event.target.value;
        this.setState({
            number: value
        })
    }

    render() {
        return (
            <div>
                

                <input 
                    type="number"
                    className="displaylimit"
                    value={this.state.number}
                    onChange={this.handleDisplayLimitChanged}
                />

            </div>
        )
    }
}

export default NumberOfEvents;