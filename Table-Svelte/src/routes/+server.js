import {json} from '@sveltejs/kit'
// src/routes/users.js
// Define your array of user data
const users = [
    { name: 'John Doe', email: 'john@example.com', age: 25 },
    { name: 'Jane Smith', email: 'jane@example.com', age: 30 },
    { name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
  ];
  
  // Define the server endpoint
  export async function GET() {
    // Simulate an asynchronous operation (e.g., fetching data from a database)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Return the user data as JSON
    return json(users)
  }
  