// latitude
var lat;
// longitude
var lng;

// truncate values to reasonable lengths
let latTrunc;
let lngTrunc;
// prevents CORS errors
const proxyurl = "https://cors-anywhere.herokuapp.com/";


$(document).ready(function () {
    // checks if they are on a modern-enough system to pull their location (probably)
    if (navigator.geolocation) {
        // pulls location
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            
            // console.log(position)
            latTrunc = parseFloat(lat.toFixed(5))
            lngTrunc = parseFloat(lng.toFixed(5))
        },
            // if they refuse permission
            function (error) {
                if (error.code == error.PERMISSION_DENIED)
                    console.log("No automatic location provided");
            });
    }
});

