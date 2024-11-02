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

        const data = await response.json();
        const selectedWorld = data.find(world => world.name === worldName);

        if (selectedWorld) {
            // Set the world name
            document.getElementById("world-name").textContent = selectedWorld.name;

            // I set the background Image of the first array in the API
            const heroSection = document.querySelector(".hero-section");
            heroSection.style.backgroundImage = `url('${selectedWorld.links.images[0]}')`;

            // I am updating the text content of the id to the specific api attribute
            document.getElementById("span-name").textContent = selectedWorld.name;
            document.getElementById("span-summary").textContent = selectedWorld.summary;
            document.getElementById("span-location").textContent = selectedWorld.location;
            document.getElementById("span-year").textContent = selectedWorld.build_year;
            document.getElementById("span-time").textContent = selectedWorld.time_period;

            // Clear existing slides
            const slideshowContainer = document.getElementById("container");
            slideshowContainer.innerHTML = '';

            // Loop through the images and create slides
            selectedWorld.links.images.forEach((imageUrl, index) => {
                const slideDiv = document.createElement("div");
                slideDiv.classList.add("mySlides", "fade");

                slideDiv.innerHTML = `
                    <div class="numbertext">${index + 1} / ${selectedWorld.links.images.length}</div>
                    <img src="${imageUrl}" style="width:100%">
                    <div class="text">Image ${index + 1}</div>
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                `;

                slideshowContainer.appendChild(slideDiv);
            });


        } else {
            console.error("World not found");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
