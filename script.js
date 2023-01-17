const url = 'http://numbersapi.com/random'
const input = document.querySelector('.input_bar')
const inputBtn = document.querySelector('.input_btn')
const factsDiv = document.querySelector('.facts')
const main = document.querySelector('.main')
const searchDiv = document.querySelector('.search')
const factsArr = []
let searchBar


const fetchApi = async (inputValue) => {
    for (let i = 0; i < inputValue; i++) {
        try {
            let response = await fetch(url)
            let result = await response.text()
            fetchFacts(result)
        }
        catch (err) {
            console.log("Error Occured while fetching the data from the api")
        }
    }
    loadSuccessMsg()
}


const loadSuccessMsg = () => {
    searchDiv.innerHTML = `<p class = "success">Loaded Succesfully💚💚💚</p>`
    setTimeout(() => {
        searchDiv.innerHTML = `
        <input type="number" class="search_bar" placeholder="Search the facts by number">
        <button class="search_btn">Search Facts</button>
        `
        searchBar = document.querySelector('.search_bar')
        searchBar.addEventListener('input', searchFacts)
    }, 900)
}


const fetchFacts = (fact) => {
    factsArr.push(fact)
    searchDiv.innerHTML = `<p class = "load">Loading Facts...</p>`
    factsDiv.innerHTML += `<p class = "factsPara">${fact}</p>`
}


const searchFacts = () => {
    let filteredFactsArr = factsArr.filter((fact) => {
        return fact.startsWith(searchBar.value)
    })
    factsDiv.innerHTML = ''
    filteredFactsArr.forEach((fact) => {
        factsDiv.innerHTML += `<p class = "factsPara">${fact}</p>`
    })
    if (filteredFactsArr.length == 0) {
        factsDiv.innerHTML = `<p class = "error">Search results not found!!!😥</p>` // Error if No Results
    }
}


const getUserInput = () => {
    if (input.value <= 100 && input.value) {
        fetchApi(input.value)
    }
    else {
        factsDiv.innerHTML = `<p class = "error">⚠️ Please enter a valid number (1-100)</p>` // Error if no input
        setTimeout(() => {
            factsDiv.innerHTML = ``
        }, 1200)
    }
}

inputBtn.addEventListener('click', getUserInput)