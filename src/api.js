import { mockData } from "./mock-data";

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */


export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
}

export const extractBasicInfo = (event) => {
    var basicInfo = {
        'time': event.start.dateTime, 
        'timezone': event.start.timeZone, 
        'summary': event.summary,
        'location': event.location
    }   
    return basicInfo   
};

export const extractEventDetails = (event) => {
    var detailInfo = {
        'summary': event.summary,
        'start': {
            'dateTime': event.start.dateTime, 
            'timeZone': event.start.timeZone
        }, 
        'location': event.location,
        'htmlLink': event.htmlLink,
        'description': event.description


        // 'time': event.start.dateTime, 
        // 'timezone': event.start.timeZone, 
        // 'summary': event.summary,
        // 'location': event.location, 
        // 'link': event.htmlLink,
        // 'description': event.description
    }   
    return detailInfo   
};

export const getEvents = async() => {
    return mockData;
};
