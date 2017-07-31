var panorama;

//var mapDiv;

//function ToEnlargeControl(controlDiv, map)
//{
//    controlDiv.style.padding = '5px';
//    controlDiv.title = 'Увеличить карту';
//
//    var controlUI = document.createElement('img');
//    controlUI.setAttribute('src', 'Images/ToBigAdvanced.png');
//    controlUI.setAttribute('width', 22);
//    controlUI.setAttribute('height', 22);
//    controlUI.setAttribute('alt', 'Увеличить карту');
//    controlUI.style.cursor = 'pointer';
//    controlDiv.appendChild(controlUI);

//    google.maps.event.addDomListener(controlUI, 'click', function () {
//        var mapCanvas = document.getElementById("map_canvas");

//        mapCanvas.style.width = 800 + 'px';
//        //mapCanvas.setAttribute('width', 500 + 'px');
//        //mapCanvas.setAttribute('height', 500 + 'px');
//        alert(mapCanvas.style.width);
//        //mapCanvas.setAttribute('zIndex', 99);

//    });
//}


//API key
// AIzaSyDWJtFBLkRHqk-vXMRsPr9Gto18xyYPGK0


function initializeMap() {

    // http://maps.googleapis.com/maps/api/directions/json?origin=55.976095,92.808392&destination=55.923785,92.266862&key=AIzaSyDFdiszdcMZLHnib6iGIc3oADvRK4DFFtw

    var mapCenter = new google.maps.LatLng(55.938251, 92.880060);

    var pointA = new google.maps.LatLng(55.976095, 92.808392),
        pointB = new google.maps.LatLng(55.923785, 92.266862),
        myOptions = {
            // zoom: 13,
            // center: mapCenter,
            mapTypeControl: false,
            mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, position: google.maps.ControlPosition.TOP_RIGHT },
            zoomControl: true,
            zoomControOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.TOP_LEFT },
            mapTypeId: google.maps.MapTypeId.HYBRID,
            streetViewControl: false
        },
        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions),
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        }),
        markerA = new google.maps.Marker({
            position: pointA,
            title: "съезд с 4-го моста в сторону Дивногорска",
            label: "A",
            map: map
        }),
        markerB = new google.maps.Marker({
            position: pointB,
            title: "залив Шумиха",
            label: "B",
            map: map
        });

    // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
    directionsService.route({
        origin: pointA,
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
    var mapCenter = new google.maps.LatLng(55.922899, 92.267084);

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