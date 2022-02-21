/*
  Functions used to work with Event related data
*/


// Get a db connection
import { Supabase } from './supabase.js';

//
// Get all events as a list (array) of Event Objects
// Also replace the Computer id with name in each event
//
async function getAllEvents() {

    // define variable to store events
    let events;

    // execute request
    // Note await in try/catch block
    try {
      // Supabase API query equivelent to:
      // select *, computers.name from events, computers order by timestamp desc;
      const result = await Supabase
        .from('events')
        .select('*, computers(name)')
        .order('timestamp', { ascending: false });

      // rresult.data contains the events
      events = await result.data;
      // Debug
      //console.log('events: ', result.data);

      // Catch and log errors to server side console
    } catch (error) {
      console.log("Supabase Error - get all events: ", error.message);
    } finally {
    }
    // return all products found
    return events;
}


// Export
export {
  getAllEvents
};
