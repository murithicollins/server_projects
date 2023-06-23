import {json} from '@sveltejs/kit'

const countriesByContinent = {
    'Africa': ['Algeria', 'Egypt', 'Nigeria', 'South Africa', 'Other African countries'],
    'Asia': ['China', 'India', 'Japan', 'South Korea', 'Other Asian countries'],
    'Europe': ['France', 'Germany', 'Italy', 'Spain', 'United Kingdom', 'Other European countries']
    // Add more continents and their countries as needed
};
 // Define the server endpoint
 export async function GET(event) {
    // Simulate an asynchronous operation (e.g., fetching data from a database)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let submittedContinent = event.url.searchParams.get('selected_continent')

    //filter only countries that were requested
    let requestedCountries = countriesByContinent[submittedContinent]
  
    // Return the user data as JSON
    return json(requestedCountries)
  }