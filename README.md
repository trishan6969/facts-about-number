
# Facts About Number

This is a simple JavaScript program that allows the user to input a number, and then retrieves the random facts about the number from the API and displays them on the page. It also includes a search feature that allows the user to filter the displayed facts by number.


## Features

- Display the facts on the webpage
- Input validation for number input
- Search feature to filter facts by number
- Error handling for invalid input and no search results
- Styling for error and success messages
- Easy to use and understand
- Fetch API and event listeners for handling user input
## How to Use

- Simply input a number in the input field, then click the "Get Facts" button.
- The program will retrieve the number of facts according to input from the API and display them on the page.
- The user can also filter the displayed facts by number by using the search bar and typing in a number.

## Functions

- **fetchApi** - This function takes an input value as a parameter and uses a for loop to make multiple API calls to the numbersapi.com website. The function also calls the loadSuccess function.
- **loadSuccessMsg** - This function displays a loading message and then a success message after the data has been fetched.
- **fetchFacts** - This function takes a fact as a parameter and pushes it to an array of facts, then appends the fact to the factsDiv element on the page.
- **searchFacts** - This function filters the facts array according to the number entered in the search bar and displays the filtered facts in the factsDiv element.
- **getUserInput** - This function is called when the user clicks the input button, it checks if the input value is valid and calls the fetchApi function if it is.
## Error Handling

- If the user doesn't input a valid number, an error message will be displayed.
- If the search bar doesn't match any fact, an error message will be displayed.
- If there is an error while fetching the data from the api, a message will be displayed at the page.
