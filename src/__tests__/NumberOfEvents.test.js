import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let events, NumberOfEventsWrapper;

    beforeAll(() => {
        events = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        NumberOfEventsWrapper = shallow(<NumberOfEvents events={events}/>);
    });

    test('render number input', () => {
        expect(NumberOfEventsWrapper.find('.displaylimit')).toHaveLength(1);
    });


    test('render display limit correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.displaylimit').prop('value')).toBe(number);
    });

    test('change state when text input changes', () => {
        NumberOfEventsWrapper.setState({
            number: 4
        });
        const displayLimit = {target: {value: 2}};
        NumberOfEventsWrapper.find('.displaylimit').simulate('change', displayLimit);
        expect(NumberOfEventsWrapper.state('number')).toBe(2);
    });
});

