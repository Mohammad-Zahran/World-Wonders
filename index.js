fetchData();

async function fetchData() {
    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const worldCards = document.getElementById("card"); 

        // What I am doing is creating new elements for each data inside the API 
        data.forEach(element => {
            const worldName = document.createElement("h1");
            worldName.textContent = element.name;

            const worldImage = document.createElement("img");
            worldImage.src = element.links.images[0]; 
            worldImage.alt = element.name; 

            worldCards.appendChild(worldName);
            worldCards.appendChild(worldImage);
        });

    } catch (error) {
        console.error(error);
    }
}
