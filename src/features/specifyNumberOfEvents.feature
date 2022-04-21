Feature: Specify number of events

Scenario: When user hasn’t specified a number, 2 is the default number
Given the user didn’t import any event number 
When the user opens the app
Then the defaulf number of upcoming events is shown on the page 

Scenario: User can change the number of events they want to see
Given the user opens the app
When user import the desired number of events in the input field
Then the number of displayed events is limited to this desired number
