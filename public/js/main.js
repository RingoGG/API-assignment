console.log( `asdasda` );

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
//   params: {term: 'wat'},
//   headers: {
//     'X-RapidAPI-Key': 'fc9b3ef8b0msh4fbe230d79b8d81p19e51fjsne00fa26f4b2d',
//     'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


function searchUrbanDictionary() {
    const searchTerm = document.getElementById('searchTerm').value;
    const definitionResult = document.getElementById('definitionResult');

    // Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
    const apiKey = 'YOUR_RAPIDAPI_KEY';
    const apiUrl = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fc9b3ef8b0msh4fbe230d79b8d81p19e51fjsne00fa26f4b2d',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display the first definition
        if (data.list && data.list.length > 0) {
            definitionResult.innerHTML = `<strong>Definition:</strong> ${data.list[0].definition}`;
        } else {
            definitionResult.innerHTML = 'No definition found.';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        definitionResult.innerHTML = 'An error occurred while fetching data.';
    });
}
