// Construct the query string
url = 'https://data.nasa.gov/resource/gh4g-9sfh.json?' +
    '$limit=40000' +
    '&$$app_token=tLLDhTKjLKruR1AmC4EMRiqYA';

// Intialize our map
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(30, 0),
        zoom: 3,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    let styles = [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }, {
            "saturation": "-100"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#000000"
        }, {
            "lightness": 40
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }, {
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#4d6059"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#4d6059"
        }]
    }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#4d6059"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "lightness": 21
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#4d6059"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#4d6059"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7f8d89"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#7f8d89"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#7f8d89"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#7f8d89"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#7f8d89"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#7f8d89"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#7f8d89"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#7f8d89"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#2b3638"
        }, {
            "visibility": "on"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2b3638"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#24282b"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#24282b"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }]
    map.setOptions({
        styles: styles
    });

    // Retrieve our data and plot it
    $.getJSON(url, function(data, textstatus) {

        var markers = [];
        $.each(data, function(i, entry) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].reclat,
                    data[i].reclong),
                map: map,
                title: data[i].name
            });


            var contentString =
                "<strong style='font-size:1.2em'>" +
                data[i].name +
                "</strong> <br/>" +
                "Weight in gramms: " +
                data[i].mass +
                " gramms<br/> " +
                "Class of meteorite: " +
                "<a target='_blank' class='classof' href='https://en.wikipedia.org/wiki/Meteorite_classification'>" +
                data[i].recclass +
                "</a> <br/>" +
                "Type of meteorite: " +
                data[i].nametype +
                "<br/><span style='color=#4d4848'><i>- Valid: a typical meteorite <br/>- Relict: a meteorite that has been highly degraded by weather on Earth</i></span>"+
                "<br/>" +
                data[i].fall +
                " in: " +
                data[i].year;


            // display info windows

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);

            });

            // Add a marker clusterer to manage the markers.
            markers.push(marker);
        });

        var options = {
            imagePath: 'images/m'
        };
        var markerCluster = new MarkerClusterer(map, markers, options);
    });

};
