// Function to fetch data from Urban Dictionary API
async function searchUrbanDictionary() {
    const searchTerm = document.getElementById('searchTerm').value;
    const definitionResult = document.getElementById('definitionResult');

    // API details
    const apiKey = 'fc9b3ef8b0msh4fbe230d79b8d81p19e51fjsne00fa26f4b2d';
    const apiUrl = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`;

    try {
        // Fetch API and async/await
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        });

        // Parse response to JSON
        const data = await response.json();

        // Display the definition and example
        if (data.list && data.list.length > 0) {
            definitionResult.innerHTML = `<strong>Definition:</strong> ${data.list[0].definition} <br><strong>Example:</strong>${data.list[2].example}`;
        } else {
            definitionResult.innerHTML = 'No definition found.';
        }
    } catch (error) {
        // show errors
        console.error('Error fetching data:', error);
        definitionResult.innerHTML = 'An error occurred while fetching data.';
    }
}
