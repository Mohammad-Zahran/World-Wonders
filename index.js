
fetchData();
async function fetchData() {
    try{
        const worldCards = document.getElementById("world-cards"); // Get the main container
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json()
       
        data.forEach(element => {
            const worldName = document.createElement("h1");
            worldName.textContent = element.name
            worldCards.appendChild(worldName)
        });

       

    }
    catch(error){
        console.log(error)
    }
}

