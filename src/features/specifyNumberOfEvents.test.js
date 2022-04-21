import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;

    test('When user hasn’t specified a number, 2 is the default number', ({ given, when, then }) => {
        given('the user didn’t import any event number', () => {

        });

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the defaulf number of upcoming events is shown on the page', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        when('user import the desired number of events in the input field', () => {
            AppWrapper.find('.count').simulate('change', { target: { value: 1 } });
        });

        then('the number of displayed events is limited to this desired number', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });
});