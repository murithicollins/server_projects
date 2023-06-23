

    <div class="container mx-auto p-6">
        <h2 class="text-2xl font-bold mb-4">Country Selection Form</h2>

        <form class="bg-white shadow-md rounded px-8 py-6">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="continent">Select Continent:</label>
                <select on:change={getTheContinentCountries} id="continent" name="continent" class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">-- Select Continent --</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <!-- Add more options for other continents as needed -->
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="country">Select Country:</label>
                <select id="country" name="country" class="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">-- Select Continent First --</option>
                    {#each countries as country}

                        <option value={country}>{country}</option>
                        
                    {/each}
                    <!-- Countries will be dynamically populated based on the selected continent -->
                </select>
            </div>
        

            <div class="flex items-center justify-between">
                <input type="submit" value="Submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            </div>
        </form>
    </div>
    <script>
        // import { json } from "@sveltejs/kit";

        let countries = []


        let getTheContinentCountries =async (event)=>{

            let selectedContinent = event.target.value

            let response = fetch(`/countries?selected_continent=${selectedContinent}`)
                .then(result=>{
                    return result.json()
                })
                .then(countriesByContinent=>{
                    console.log(countriesByContinent)
                    countries = countriesByContinent
                })

        }
        
    </script>

