fetchData();

async function fetchData() {
    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const worldCards = document.getElementById("world-cards"); 

        // Create new elements for each data inside the API 
        data.forEach(element => {
            const card = document.createElement("div");
            card.className = "wonder-card"; 

            const worldName = document.createElement("h1");
            worldName.textContent = element.name;

            const worldImage = document.createElement("img");
            worldImage.src = element.links.images[0]; 
            worldImage.alt = element.name; 

            const button = document.createElement("button");
            button.textContent = "World Details"

            // I used the name exactly since the API doesnt have a id attribute so I used the name 
            // What is happening exactly is that the button is taking name of the element then navigating it 
            // to the specific world
            button.addEventListener("click", () => {
                const id = element.name;
                window.location.href = `world.html?id=${id}`;
            })

            card.appendChild(worldName);
            card.appendChild(worldImage);
            card.appendChild(button)
            
            worldCards.appendChild(card);

            // What I am doing here is appending the contents of the card to the card class that I create at the top
            // and appended the card to the worldCards
        });

    } catch (error) {
        console.error(error);
    }
}
