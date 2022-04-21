Feature: Show/hide event Details

Scenario: An event element is collapsed by default 
Given the user open the app
When a list of events is displayed in the main page
Then user can see just the important information such as time, title as well as place for each event

Scenario: User can expand an event to see its details
Given the main page is open 
When user clicks the show details button for a certain event
Then detailed information about the event is shown to the user.

Scenario: User can collapse an event to hide its details
Given the event block expanded
When the user clicks on hide (show less) button
Then key information of the event is shown in the block

