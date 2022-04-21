import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;

    test('An event element is collapsed by default', ({ given, when, then }) => {

        given('the user open the app', () => {
            AppWrapper = mount(<App />);
        });

        when('a list of events is displayed in the main page', () => {

        });

        then('user can see just the important information such as time, title as well as place for each event', () => {
            expect(AppWrapper.find('.event__Details')).toHaveLength(0)
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', async() => {
            AppWrapper = await mount(<App />);
        });

        when('user clicks the show details button for a certain event', () => {
            AppWrapper.update();
            AppWrapper.find('.button').at(0).simulate('click');
        });

        then('detailed information about the event is shown to the user.', () => {
            expect(AppWrapper.find('.event__Details')).toHaveLength(1)
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {

        given('the event block expanded', async() => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();            
            AppWrapper.find('.button').at(0).simulate('click');
            expect(AppWrapper.find('.event__Details')).toHaveLength(1);

        });

        when('the user clicks on hide (show less) button', () => {
            AppWrapper.find('.button').at(0).simulate('click');
        });

        then('key information of the event is shown in the block', () => {
            expect(AppWrapper.find('.event__Details')).toHaveLength(0);
        });
    });

});