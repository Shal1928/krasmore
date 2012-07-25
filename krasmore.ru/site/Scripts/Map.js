//var mapDiv;

function ToEnlargeControl(controlDiv, map) 
{
    controlDiv.style.padding = '5px';
    controlDiv.title = 'Увеличить карту';
    
    var controlUI = document.createElement('img');
    controlUI.setAttribute('src', 'Images/ToBigAdvanced.png');
    controlUI.setAttribute('width', 22);
    controlUI.setAttribute('height', 22);
    controlUI.setAttribute('alt', 'Увеличить карту');
    controlUI.style.cursor = 'pointer';
    controlDiv.appendChild(controlUI);

    google.maps.event.addDomListener(controlUI, 'click', function () {
        var mapCanvas = document.getElementById("map_canvas");

        mapCanvas.style.width = 800 + 'px';
        //mapCanvas.setAttribute('width', 500 + 'px');
        //mapCanvas.setAttribute('height', 500 + 'px');
        alert(mapCanvas.style.width);
        //mapCanvas.setAttribute('zIndex', 99);

    });
}

function initializeMap() {

    var polyanaLatLng = new google.maps.LatLng(55.831250, 92.251116);

    var mapCenter = new google.maps.LatLng(55.830445, 92.255008);

    var options = {
        zoom: 15,
        center: mapCenter,
        mapTypeControl: false,
        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, position: google.maps.ControlPosition.TOP_RIGHT },
        zoomControl: true,
        zoomControOptions: { style: google.maps.ZoomControlStyle.LARGE, position: google.maps.ControlPosition.TOP_LEFT },
        mapTypeId: google.maps.MapTypeId.HYBRID,
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), options);

    var toEnlargeControlDiv = document.createElement('div');
    var toEnlargeControl = new ToEnlargeControl(toEnlargeControlDiv, map);

    toEnlargeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(toEnlargeControlDiv);

    document.getElementById("map_canvas");

//    var markerContentString = '<div style="color: #FFF; font: 14 Verdana;">' +
//                                            'Поляна' +
//                                        '</div>';

    //var markerSvg = new google.maps.MarkerImage('Marker.svg');
//    var marker = new RichMarker({
//        content: markerContentString, //document.getElementById("MarkerSvg"),
//        position: new google.maps.LatLng(55.830300, 92.250116),
//        map: map,
//        title: "Поляна",
//        shadow: false,
//        anchor: RichMarkerPosition.TOP_RIGHT
//    });


//    var markerFlagContentString = '<div style="color: #000; font: 10 Verdana;">' +
//                                            '<div style="z-index:99; top: 18px; left: 5px; float: left; position: relative;">навес</div><img src="markerFlag.png" style="z-index: 1; position: relative;"></img>' +
//                                        '</div>';

//    var markerFlage = new RichMarker({
//        content: markerFlagContentString, //document.getElementById("MarkerSvg"),
//        position: new google.maps.LatLng(55.830300, 92.250116),
//        map: map,
//        title: "Поляна",
//        shadow: true,
//        anchor: RichMarkerPosition.BOTTOM_LEFT
//    });


    //            google.maps.event.addListenerOnce(map, 'idle', function () {
    //                $('.arrow').svg({ onLoad: 'Marker.svg' });
    //            });

//    var contentString = '<div id="content">' +
//                '<div id="siteNotice">' +
//                    '</div>' +
//                        '<h2 id="firstHeading" class="firstHeading">Поляна</h2>' +
//                            '<div id="bodyContent">' +
//                                '<p>Находится в 12 км от Красноярской ГЭС, за Бирюсинским заливом. ' +
//                                    'Если идти на Амуре, то путь занимает примерно 20 минут, а на большом катере 40. ' +
//                                        'Поляна достаточно удалена от фарватера, чтобы проходящие мимо катера ' +
//                                            'не мешали вам отдыхать и купаться.</p>' +
//                                                '</div>' +
//                                                    '</div>';

//    var infowindow = new google.maps.InfoWindow({
//        content: contentString
//    });

//    google.maps.event.addListener(marker, 'click', function () {
//        infowindow.open(map, marker);
//    });


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


//    var weatherLayer = new google.maps.weather.WeatherLayer({
//        temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS
//    });
//    weatherLayer.setMap(map);

//    var cloudLayer = new google.maps.weather.CloudLayer();
//    cloudLayer.setMap(map);
}