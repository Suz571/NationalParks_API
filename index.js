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

    function displayResults(){
        
    }








})