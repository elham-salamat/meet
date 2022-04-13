import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { extractBasicInfo, extractEventDetails } from '../api';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {

    
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={{}}/>);
    });

    test('render event basic info', () => {
        expect(EventWrapper.find('.BasicInfo')).toHaveLength(1);
    });

    test('render button', () => {
        expect(EventWrapper.find('.button')).toHaveLength(1);
    });

    test('render basic info of event correctly', () => {
        EventWrapper.setState({
            eventInfo: extractBasicInfo(mockData[0])
        });
        const eventInfo = EventWrapper.state('eventInfo');
        const valuesArray = Object.values(eventInfo);
        expect(EventWrapper.find('.BasicInfo li')).toHaveLength(4);
        for (let i = 0; i < 4; i+= 1) {
            expect(EventWrapper.find('.BasicInfo li').at(i).text()).toBe(valuesArray[i]);
        }
    });

    test('clicking button should change eventInfo state', () => {
        EventWrapper.setState({
            eventInfo: extractBasicInfo(mockData[0])
        });
        const detailInfo = extractEventDetails(mockData[0]);
        EventWrapper.find('.button').simulate('click');
        expect(EventWrapper.state('eventInfo')).toEqual(detailInfo);
    });

});
