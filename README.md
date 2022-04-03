# Meet App
this app is developed to obtain the target of building a serverless, progressive web application (PWA) with React using a  
test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events and users are able to see a list of upcomming events around the world. They also have the possibility to choose the city where they would like to know its upcoming events. The key features of the app are listed below.


## KEY FEATURES:  
● Filter events by city. 
● Show/hide event details. 
● Specify number of events. 
● Use the app when oﬄine. 
● Add an app shortcut to the home screen. 
● View a chart showing the number of upcoming events by city. 


## USERSTORIES AND ASSOCIATE TEST SCENARIOS

#### FEATURE 1: FILTER EVENTS BY CITY
###### user story
As a user
I should be able to “filter events by city”
So that I can see the list of events that take place in that city

###### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities. 
__Given__ user hasn’t searched for any city
__When__ the user opens the app
__Then__ the user should see a list of all upcoming events

###### Scenario 2: User should see a list of suggestions when they search for a city.
__Given__ the main page is open
__When__ user starts typing in the city textbox
__Then__ the user should see a list of cities (suggestions) that match what they’ve typed

###### Scenario 3: User can select a city from the suggested list. 
__Given__ the user was typing “Berlin” in the city textbox 
And the list of suggested cities is showing
__When__ the user selects a city (e.g., “Berlin, Germany”) from the list
__Then__ their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

*** 

#### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
###### user story
As a user 
I should be able to show/hide an event details
So that I will be able to see more detail about a certain event/just see the key points (time, place, subject) about a certain event.

###### Scenario 1: An event element is collapsed by default 
__Given__ the user open the app
__When__ a list of events is displayed in the main page
__Then__ user can see just the important information such as time, title as well as place for each event

###### Scenario 2: User can expand an event to see its details
__Given__ the main page is open 
__When__ user clicks the show details button for a certain event
__Then__ event block expands 
And detailed information about the event is shown to the user.

###### Scenario 3: User can collapse an event to hide its details
__Given__ the event block expanded
__When__ the user clicks on hide (show less) button
__Then__ event block shrinks and just key information of the event is shown in the block

***

#### FEATURE 3: SPECIFY NUMBER OF EVENTS
###### user story
As a user 
I should be able to specify the number of events
So that I will be able to limit the number of displayed events in the web page.

###### Scenario 1: When user hasn’t specified a number, 32 is the default number
__Given__ the user didn’t import any event number 
__When__ the list of events is shown in the main page
__Then__ the number of events is 32 by default 
And user can see 32 upcoming events 

###### Scenario 2: User can change the number of events they want to see
__Given__ a list of events is shown in the main page
__When__ user import the desired number of events in the input field
__Then__ the number of displayed events is limited to this desired number.

***

#### FEATURE 4: USE THE APP WHEN OFFLINE
###### user story
As a user 
I should be able to use the app when offline
So that I will be able to follow and check the upcoming events happening everywhere when I don’t have accessibility to internet.

###### Scenario 1: Show cached data when there’s no internet connection
__Given__ the user is offline
__When__ the user opens the app
__Then__ the charts and upcoming events 
And related information is displayed in the main page 

###### Scenario 2: Show error when user changes the settings (city, time range)
__Given__ the user is offline 
And he/she opens the app
__When__ user change the settings such as city and time range in the app
__Then__ they will get an error that he is offline 
And he needs to be online first to change the settings.

***

#### FEATURE 5: DATA VISUALIZATION
###### user story
As a user 
I should be able to see a chart representing the number of upcoming event in each city
So that I will have an overview of what is happening around.

###### Scenario 1: Show a chart with the number of upcoming events in each city
__Given__ the user opens the app
__When__ the main page is displayed
__Then__ a scatter chart shows the number of upcoming events for each certain city. 
