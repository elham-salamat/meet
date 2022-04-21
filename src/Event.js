import React, { Component } from 'react';

class Event extends Component {
    state = {
        collapsed: true
    }

    handleClick = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;

        return (             
            <div className="event">
                <h1 className="summary">{event.summary}</h1>
                <p className="date">{event.start.dateTime} | ({event.start.timeZone})</p>
                <p className="location">{event.location}</p>
                <div>
                    {collapsed ? (
                    <button                     
                        type="button"
                        className="button"
                        onClick={this.handleClick}
                    >                     
                        Show details
                    </button>
                    ) : (
                    <div className="event__Details">
                        <h2>About event:</h2>
                        <a href={event.htmlLink} target='_blank' rel='noopener noreferrer'>
                            See details on Google Calendar
                        </a>
                        <p className="description">{event.description}</p>
                        <button                     
                            type="button"
                            className="button"
                            onClick={this.handleClick}
                        >                     
                            Hide details
                        </button>
                    </div>
                    )}
                </div>
            </div>
        )
    }

}

export default Event;