// world.js
document.addEventListener("DOMContentLoaded", loadWorldData);

async function loadWorldData() {
    const params = new URLSearchParams(window.location.search);
    const worldName = params.get("id");

    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");
        if (!response.ok) {
            throw new Error("Could not fetch world data");
        }

        //  URLSearchParams is a function I found in W3schools which help to parse the query string from the url
        const data = await response.json();
        //retrieves the value of the id parameter from the URL, which is expected to contain the name of the world (e.g., ?id=Great%20Pyramid%20of%20Giza would give worldName = "Great Pyramid of Giza"
        const selectedWorld = data.find(world => world.name === worldName);

        if (selectedWorld) {
            // Set the world name
            document.getElementById("world-name").textContent = selectedWorld.name;

            // I set the background Image of the first array in the API
            const heroSection = document.querySelector(".hero-section");
            heroSection.style.backgroundImage = `url('${selectedWorld.links.images[0]}')`;
            
        } else {
            console.error("World not found");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
