const btnEl = document.querySelector("#btn")
const jokeEl= document.querySelector("#joke")
const apiKey = "0VAf0NPKHPAB3ZjRRu/tGg==T8l09uZ62SBmcxlF"

const options = {
    method: 'GET',
    headers: {
        "X-Api-key": apiKey,
    }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true
        btnEl.innerText = "Loading..."
    
        const response = await fetch(apiUrl, options)
        const data = await response.json()
    
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke"

        jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false
        btnEl.innerText = "Tell me a joke"
       console.log(error) 
    }
}

btnEl.addEventListener('click', getJoke)