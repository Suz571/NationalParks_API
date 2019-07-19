$(document).ready(function(){

    function searchParks(){

        const apiKey = 'v7M0R5aZGFl5syUwiKzEdcsroABEQcPveWnWC8R0';
        let stateCode = $('#stateCode').val();
        const apiURL = "https://developer.nps.gov/api/v1/parks?stateCode="
        let apiPath = apiURL+stateCode+'&api_key='+apiKey;
        let maxResults = $('#maxResults').val();
        console.log(stateCode);
        console.log(apiPath);

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

        console.log(maxResults);
        console.log(`${responseJson[i].html_url}`);
        console.log(`${responseJson[i].description}`);
        console.log(`${responseJson[i].fullname}`);
        
        for (let i = 0; i < maxResults; i++) {
            $('#results-list').append(
                `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].fullname}</a></h3>
                <p>${responseJson[i].description}</p>
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