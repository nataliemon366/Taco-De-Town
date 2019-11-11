const geo = require('./geolocation');
const googleApiKey = process.env.googleApiKey;
const zipApiKey= zipApiKey;
const queryUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=restaurant&keyword=key=${googleApiKey}`;

const initMap = () => {
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(
        document.getElementById('googleMaps'), { center: { latTrunc, lngTrunc }, zoom: 13 }
    )
};

const zipSearch = () => {
    const zipCode = $(".zipCode").val();
    $.ajax({
        url: proxyurl + `http://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/${zipCode}?key=${zipApiKey}`,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        lat = response.Latitude;
        lng = response.Longitude;
        latTrunc = parseFloat(lat.toFixed(5))
        lngTrunc = parseFloat(lng.toFixed(5))
        mapRestaraunts();
        displayRestaraunts();
    })
}

const mapRestaraunts = () => {
    // jquery pointers are placeholders
    $('#googleMaps').empty()
    $('#googleMaps').addClass("mapScreen")
    $.ajax({
        url: proxyurl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latTrunc},${lngTrunc}&radius=4500&type=restaurant&keyword=${searchWord}&key=${googleApiKey}`,
        method: 'GET'
    }).then(function (response) {
        var results = response.results
        for (let i = 0; i < results.length; i++) {
            lat = parseFloat(lat)
            lng = parseFloat(lng)
            initMap(results[i].name)
        }
    })
}