//Get location form
var locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit',geocode);

//Call geocode
//geocode();

function geocode(e){
    //Prevent actual submit
    e.preventDefault();


    var location = document.getElementById('location-input').value;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address: location,
            key:'AIzaSyBp8OPq4x2N57MPkiaVkcT0cC2bPWyJbqs'
        }
    })
    .then(function(response){
        //Log full response
        console.log(response);

        // Formatted Address
        //console.log(response.data.results[0].formatted_adress)
        var formattedAddress= response.data.results[0].formatted_address;
        var formattedAddressOutput = `
        <ul class = "list-group">
            <li class="list-group-item">${formattedAddress}</li>
        </ul>
        `;

        // Address components
        var addressComponents = response.data.resulta[0].address_components;
        var addressComponents = '<ul class = "list-group">';
        for(var i = 0 ; i < addressComponents.length; i++ ){
            addressComponentsOutput += `
            <li class = "list-group-item"><strong>${addressComponents[i].types[0]}</strong>:${addressComponents[i].long_name}</li>
            `;
        }

        addressComponentsOutput += '</ul>'

        //Geometry 
        var lat= response.data.results[0].geometry.location.lat;
        var lng= response.data.results[0].geometry.location.lng;
        var geometryOutput = `
        <ul class = "list-group">
            <li class="list-group-item"><strong>Latitude</strong>:${lat}</>
            <li class="list-group-item"><strong>Longitude</strong>:${lng}</>
        </ul>
        `;

            
        //output to app
        document.getElementById('formatted-address').innerHTML=formattedAddressOutput;
        document.getElementById('address-address').innerHTML=ddressComponentsOutput;
        document.getElementById('geometry').innerHTML=geometryOutput;
    })
    .catch(function(error){
        console.log(error);
    })
}

