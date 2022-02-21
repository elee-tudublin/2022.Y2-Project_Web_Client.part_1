
// Import eventData dependency allowing access to its exported functions
import * as eventData from './dataAccess/eventData.js';

/*
  Functions used to update the index page view
*/

// reference to page element where rows will be inserted 
const eventRows = document.getElementById('eventRows');

// Display event objects in a table element
//
function displayEventList(events) {

  // Use the Array map method to iterate through the array of message documents
  // Each message will be formated as HTML table rows and added to the array
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // Finally the output array is inserted as the content into the <tbody id="eventRows"> element.
  
  const tableRows = events.map(event => {

    // Note: the following is a template string, enclosed by `backticks` and not 'single quotes'
    // This allows ${JavaScript} to be added directl to the string if enclosed by ${ }
    // See https://wesbos.com/template-strings-html for more.

    // A row is returned for each event found in events.
    // rows are added to tableRows
    return `<tr>
          <td>${event.id}</td>
          <td>${event.type}</td>
          <td>${event.level}</td>

          <!-- convert timestamp to ISO date time string -->
          <td>${new Date(event.timestamp).toISOString()}</td>
          <td>${event.service}</td>

          <!-- add a tooltip - visible when mouse hovers over the element -->
          <td data-toggle="tooltip" title="computer_id=${event.computer_id}">${event.computers.name}</td>
          <td>${event.user}</td>
          <td>${event.description}</td>
      </tr>`;
  });

  // Add rows to the table body
  eventRows.innerHTML = tableRows.join('');
}


// Get JSON array of events
// Then pass that data for display
//
async function loadAndDisplayData() {
  // load all events and display
  // use the event repository to get the data
  const events = await eventData.getAllEvents();
  console.log('events:', events);
  displayEventList(events);
}

// export functions
export {
  loadAndDisplayData,
}


// Get and display data when the page loads
loadAndDisplayData();