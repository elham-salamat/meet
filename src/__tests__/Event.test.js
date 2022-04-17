import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { extractBasicInfo, extractEventDetails } from '../api';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {

    
    let eventInfo, EventWrapper;

    beforeAll(() => {
        eventInfo = extractEventDetails(mockData[0])
        EventWrapper = shallow(<Event event={eventInfo}/>);
    });

    test('render basic info when the collapsed state is true', () => {
        EventWrapper.setState({
            collapsed: true
        });
        expect(EventWrapper.find('h1')).toHaveLength(1);
        expect(EventWrapper.find('p')).toHaveLength(2);
        expect(EventWrapper.find('h1').text()).toBe(eventInfo.summary);
        expect(EventWrapper.find('p.date').text()).toBe(`${eventInfo.start.dateTime} | (${eventInfo.start.timeZone})`);
        expect(EventWrapper.find('p.location').text()).toBe(eventInfo.location);

    });

    test('render details info when the collapsed state is false', () => {
        EventWrapper.setState({
            collapsed: false
        });
        expect(EventWrapper.find('h1')).toHaveLength(1);
        expect(EventWrapper.find('p')).toHaveLength(3);
        expect(EventWrapper.find('a')).toHaveLength(1);
        expect(EventWrapper.find('h1').text()).toBe(eventInfo.summary);
        expect(EventWrapper.find('p.date').text()).toBe(`${eventInfo.start.dateTime} | (${eventInfo.start.timeZone})`);
        expect(EventWrapper.find('p.location').text()).toBe(eventInfo.location);
        expect(EventWrapper.find('p.description').text()).toBe(eventInfo.description);
        expect(EventWrapper.find('a').prop('href')).toBe(eventInfo.htmlLink);

    });


    test('render button', () => {
        expect(EventWrapper.find('.button')).toHaveLength(1);
    });

    test('clicking the button should change the collapsed state', () => {
        const collapsed = EventWrapper.state('collapsed');
        if (collapsed) {
            expect(EventWrapper.find('.button').text()).toBe('Show details');
        } else {
            expect(EventWrapper.find('.button').text()).toBe('Hide details');
        }
        EventWrapper.find('.button').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(!collapsed);      
    });

});
