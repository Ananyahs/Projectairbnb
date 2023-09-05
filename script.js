window.addEventListener("DOMContentLoaded", (event) => {
    // Your code goes here
    
    const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value;
///// api.example has to be replaced with rapid api
   /* fetch(`https://rapidapi.com/3b-data-3b-data-default/api/airbnb13?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
            // Your code to display the listings goes here
        })
        .catch(error => console.error('Error:', error));
});*/
    
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};


  fetch(url, options)
  .then(response=>response.text())
  .then(data=>console.log(data))
 .catch (error=>
  console.error(error));
    
 });   
    
});
