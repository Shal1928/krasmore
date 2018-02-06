function initializeMap() {
    var pointA = new google.maps.LatLng(55.976095, 92.808392),
        waypoints =  [{
                location: new google.maps.LatLng(55.923910, 92.267963),
                stopover: false
        }],
        pointB = new google.maps.LatLng(55.923179, 92.268066),
        myOptions = {
            // zoom: 13,
            // center: mapCenter,
            mapTypeControl: false,
            mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, position: google.maps.ControlPosition.TOP_RIGHT },
            zoomControl: true,
            zoomControOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.TOP_LEFT },
            mapTypeId: google.maps.MapTypeId.HYBRID,
            streetViewControl: false
        };

    var map = new google.maps.Map(
        document.getElementById('map_canvas'), myOptions),
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });
    
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, waypoints);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, waypoints) {
    directionsService.route({
        origin: pointA,
        waypoints: waypoints,
        destination: pointB,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function showShumihaPlease() {
    var mapCenter = new google.maps.LatLng(55.923179, 92.268066);

    var options = {
        zoom: 16,
        center: mapCenter,
        mapTypeControl: false,
        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, position: google.maps.ControlPosition.TOP_RIGHT },
        zoomControl: true,
        zoomControOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.TOP_LEFT },
        mapTypeId: google.maps.MapTypeId.HYBRID,
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), options);

    var placesArray = {};
    placesArray['shumiha'] = {
        center: new google.maps.LatLng(55.923179, 92.268066)
    };

    var placeCircle;

    for (var city in placesArray) {
        // Construct the circle for each value in citymap. We scale population by 20.
        var populationOptions = {
            strokeColor: "#FFF", //EEB744
            strokeOpacity: 0.4,
            strokeWeight: 2,
            fillColor: "#97C35F", //97C35F
            fillOpacity: 0.2,
            map: map,
            center: placesArray[city].center,
            radius: 130
        };
        placeCircle = new google.maps.Circle(populationOptions);
    }
}

function showPolyanaPlease() {
    var mapCenter = new google.maps.LatLng(55.830445, 92.255008);

    var options = {
        zoom: 13,
        center: mapCenter,
        mapTypeControl: false,
        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, position: google.maps.ControlPosition.TOP_RIGHT },
        zoomControl: true,
        zoomControOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.TOP_LEFT },
        mapTypeId: google.maps.MapTypeId.HYBRID,
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), options);

    var placesArray = {};
    placesArray['polyana'] = {
        center: new google.maps.LatLng(55.831150, 92.251516)
    };

    var placeCircle;

    for (var city in placesArray) {
        // Construct the circle for each value in citymap. We scale population by 20.
        var populationOptions = {
            strokeColor: "#FFF", //EEB744
            strokeOpacity: 0.4,
            strokeWeight: 2,
            fillColor: "#97C35F", //97C35F
            fillOpacity: 0.2,
            map: map,
            center: placesArray[city].center,
            radius: 130
        };
        placeCircle = new google.maps.Circle(populationOptions);
    }
}