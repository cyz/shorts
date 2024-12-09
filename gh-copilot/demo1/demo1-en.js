function fetchDataFromAPI(apiUrl) {
fetch(apiUrl).then(response => {
    if (response.ok) {
        return response.json();
    } else { // Handle the error
        throw new Error('Network response was not ok');
    }