import React, { Component } from 'react';
import { extractBasicInfo, extractEventDetails } from './api';
import { mockData } from './mock-data';

class Event extends Component {
    state = {
        // eventInfo: extractBasicInfo(mockData[0])
        eventInfo: {}
    };
   

    handleButtonClicked = (detailInfo) => {
        this.setState({
            eventInfo: detailInfo
        });
    }

    render() {

        const basicInfo = (eventInfo) => {
            const basicInfo = [];

            for (const [key, value] of Object.entries(eventInfo)) {
                basicInfo.push({key, value});
            }
            return basicInfo
        }

        // const detailInfo = () => {
        //     extractEventDetails(mockData[0])
        // }

        return (             
            <div className="event">
                <div className="BasicInfo">
                {basicInfo(this.state.eventInfo).map((item) => (
                        <li
                            key={item.key}
                        >
                            {item.value}
                        </li>  
                ))}
                </div>
                <button                     
                    type="button"
                    className="button"
                    onClick={this.handleButtonClicked(extractEventDetails(mockData[0]))}>                     
                        show details
                </button>
            </div>
        )
    }

}

export default Event;