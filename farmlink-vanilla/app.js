// This event listener ensures our code runs only after the whole HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- OUR LOCAL DATABASE IS NOW HERE, INSIDE THE JAVASCRIPT ---
    const farmersData = [
        {
            "id": 1,
            "farm_name": "Green Valley Farms",
            "owner_name": "John & Mary Green",
            "story": "A family-run farm for over 50 years, specializing in organic tomatoes, lettuce, and carrots. We believe in sustainable agriculture.",
            "location": "Maple Creek"
        },
        {
            "id": 2,
            "farm_name": "Sunny Orchard",
            "owner_name": "David Sunny",
            "story": "Home to the sweetest apples, peaches, and berries. We use natural methods to grow the most flavorful fruit you've ever tasted.",
            "location": "Willow Creek"
        },
        {
            "id": 3,
            "farm_name": "Oakwood Pastures",
            "owner_name": "Susan Oakwood",
            "story": "We raise happy, free-range chickens, providing the freshest eggs in the region. Our small vegetable patch offers seasonal greens.",
            "location": "Pine Ridge"
        },
        {
            "id": 4,
            "farm_name": "Hilltop Harvest",
            "owner_name": "The Miller Family",
            "story": "Known for our potatoes, onions, and garlic. We provide the essential ingredients for all your favorite home-cooked meals.",
            "location": "Stonefield"
        }
    ];
    // -----------------------------------------------------------

    // Get references to the HTML elements we will be working with.
    const farmerListContainer = document.getElementById('farmer-list-container');
    const loadingMessage = document.getElementById('loading-message');

    // This function takes the array of farmers and creates the HTML for them.
    function displayFarmers(farmers) {
        // Hide the "Loading..." message.
        loadingMessage.style.display = 'none';
        
        // Clear any previous content.
        farmerListContainer.innerHTML = '';

        // Loop through each farmer object in the array.
        farmers.forEach(farmer => {
            // 1. Create a new 'div' element for the card.
            const card = document.createElement('div');
            card.className = 'farmer-card'; // Add our CSS class

            // 2. Create and set the content for the farm name (h3).
            const farmName = document.createElement('h3');
            farmName.textContent = farmer.farm_name;

            // 3. Create and set the content for the owner name.
            const ownerName = document.createElement('p');
            ownerName.className = 'owner';
            ownerName.textContent = `Run by: ${farmer.owner_name}`;

            // 4. Create and set the content for the story.
            const story = document.createElement('p');
            story.className = 'story';
            story.textContent = farmer.story;

            // 5. Create the "View Products" button (an 'a' tag).
            const link = document.createElement('a');
            link.className = 'btn';
            link.textContent = 'View Products';
            link.href = '#'; // Placeholder link

            // 6. Append all the new elements into the card div.
            card.appendChild(farmName);
            card.appendChild(ownerName);
            card.appendChild(story);
            card.appendChild(link);

            // 7. Append the completed card to the main container on the page.
            farmerListContainer.appendChild(card);
        });
    }

    // Now, we just call the display function directly with our data.
    // No fetching is needed!
    displayFarmers(farmersData);
});