$(document).ready(function(){

    function searchParks(){

        const apiKey = 'v7M0R5aZGFl5syUwiKzEdcsroABEQcPveWnWC8R0';
        let apiURL = 
        let apiPath = 

        fetch(apiPath)
        .then(status)
        .then(response=>response.json())
        .then(responseJson=>
                displayResults(responseJson())
    }

    function status(){
        if(!response.ok){
            throw alert("Oops. Something went wrong!")
        }
        return response;
    }

    function displayResults(responseJson){
        $('#results-list').empty();
        for (let i = 0; i < responseJson.length; i++) {
            $('#results-list').append(
                `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
                <p>${responseJson[i].description}</p>
                </li>`
            )};
        $('#results').removeClass('hidden');
    }








})