import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventsCount={() => {}} />);
    });

    test('render number input', () => {
        expect(NumberOfEventsWrapper.find('.count')).toHaveLength(1);
    });


    test('render number of events correctly', () => {
        const eventsCount = NumberOfEventsWrapper.state('eventCount');
        expect(NumberOfEventsWrapper.find('.count').prop('value')).toBe(eventsCount);
    });

    test('change state when text input changes', () => {
        NumberOfEventsWrapper.setState({
            eventCount: 8
        });
        const eventsCount = {target: {value: 5}};
        NumberOfEventsWrapper.find('.count').simulate('change', eventsCount);
        expect(NumberOfEventsWrapper.state('eventCount')).toBe(5);
    });
});

