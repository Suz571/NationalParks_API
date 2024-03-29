$(document).ready(function(){

    function searchParks(){

        const apiKey = 'v7M0R5aZGFl5syUwiKzEdcsroABEQcPveWnWC8R0';
        let stateCode = $('#stateCode').val();
        let maxResults = $('#maxResults').val();
        const apiURL = "https://developer.nps.gov/api/v1/parks?stateCode="
        let apiPath = apiURL+stateCode+'&api_key='+apiKey+'&limit='+maxResults;
   
        console.log(stateCode);
        console.log(apiPath);
        console.log(maxResults);

        fetch(apiPath)
        .then(status)
        .then(response=>response.json())
        .then(responseJson=>
                displayResults(responseJson))
    }

    function status(response){
        if(!response.ok){
            throw alert("Oops. Something went wrong!")
        }
        return response;
    }

    function displayResults(responseJson){
        $('#results-list').empty();    
         for (let i = 0; i < responseJson.data.length; i++){
            $('#results-list').append(
                `<li><h3><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h3>
                <p>${responseJson.data[i].description}</p>
                </li>`
            )};
            
        $('#results').removeClass('hidden');
    }
   

    function runForm(){
        $('form').submit(e=>{
            event.preventDefault();
            searchParks();
    
        });
    }
    
    $(runForm);




})