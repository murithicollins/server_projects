import { json } from "@sveltejs/kit";

const profile = [
    { image: "img/netflix 1.png", description: "collins" },
    { image: "img/netflix 2.png", description: "Dennis" },
    { image: "img/netflix 3.png", description: "Martin" },
    { image: "img/netflix 4.png", description: "Samuel" }
];
  // Define the server endpoint
  export async function GET() {
    // Simulate an asynchronous operation (e.g., fetching data from a database)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Return the user data as JSON
    return json(profile)
  }
// export async function GET() {
//     // Simulate an asynchronous operation (e.g., fetching data from a database)
//     await new Promise((resolve) => setTimeout(resolve, 1000));
  
//     // Return the user data as JSON
//     return JSON.stringify(profile);
// }