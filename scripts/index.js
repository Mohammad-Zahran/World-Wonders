fetchData();

async function fetchData() {
    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const worldCards = document.getElementById("world-cards"); 

        data.forEach(element => {
            const card = document.createElement("div");
            card.className = "card"; 

            const worldName = document.createElement("h1");
            worldName.textContent = element.name;

            const worldImage = document.createElement("img");
            worldImage.src = element.links.images[0]; 
            worldImage.alt = element.name; 

            const icons = document.createElement("div");
            icons.className = "icons"; 

            const wikiIcon = document.createElement("a");
            wikiIcon.href = element.links.wiki;
            wikiIcon.target = "_blank"; 
            const wikiImage = document.createElement("img");
            wikiImage.src = "./assets/wiki.svg";
            wikiImage.alt = "Wikipedia"; 
            wikiImage.className = "icon"; 
            wikiIcon.appendChild(wikiImage);

            const britannicaIcon = document.createElement("a");
            britannicaIcon.href = element.links.britannica;
            britannicaIcon.target = "_blank"; 
            const britannicaImage = document.createElement("img");
            britannicaImage.src = "./assets/britannica.svg";
            britannicaImage.alt = "Britannica"; 
            britannicaImage.className = "icon"; 
            britannicaIcon.appendChild(britannicaImage); 

            const googleMaps = document.createElement("a");
            googleMaps.href = element.links.google_maps;
            googleMaps.target = "_blank"; 
            const mapsImage = document.createElement("img");
            mapsImage.src = "./assets/google-maps.svg";
            mapsImage.alt = "Google Maps"; 
            mapsImage.className = "icon"; 
            mapsImage.id = "google-icon"
            googleMaps.appendChild(mapsImage); 

            const tripAdvisor = document.createElement("a");
            tripAdvisor.href = element.links.trip_advisor;
            tripAdvisor.target = "_blank"; 
            const advisorImage = document.createElement("img");
            advisorImage.src = "./assets/trip_advisor.svg";
            advisorImage.alt = "TripAdvisor"; 
            advisorImage.className = "icon"; 
            tripAdvisor.appendChild(advisorImage); 

            const button = document.createElement("button");
            button.textContent = "World Details";

            button.addEventListener("click", () => {
                const id = element.name;
                window.location.href = `world.html?id=${id}`;
            });

            card.appendChild(worldName);
            card.appendChild(worldImage);
            card.appendChild(icons);
            card.appendChild(button);

            icons.appendChild(wikiIcon);
            icons.appendChild(britannicaIcon);
            icons.appendChild(googleMaps);
            icons.appendChild(tripAdvisor);
            
            worldCards.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}
