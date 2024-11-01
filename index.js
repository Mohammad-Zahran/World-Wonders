

async function fetchData() {
    try{
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");

        const data = await response.json()
        console.log(data);

    }
    catch(error){
        console.log(error)
    }
}

fetchData()