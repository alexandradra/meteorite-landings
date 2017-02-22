    // Construct the query string
    url = 'https://data.nasa.gov/resource/gh4g-9sfh.json?' +
        '$limit=50000' +
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

        $('#submitButton').on('click', function() {
            // Base SODA endpoint. Leave off .json file type so we can use it later for csv download
            // Get the selected dates from the slider
            inputMax = Math.floor($("#slider").editRangeSlider("max"));
            inputMin = Math.floor($("#slider").editRangeSlider("min"));
            console.log(inputMax);
            console.log(inputMin);


            // Sample API call: https://data.fortworthtexas.gov/resource/i85s-46fv.json?$where=codate >= '2014-07-01' AND codate < '2014-07-31'

            // Format the min and max date into YYYY-MM-DD required for SODA
             inputMax = inputMax + "-01-01T00:00:00";
             inputMin = inputMin + "-01-01T00:00:00";

            // Build the API call
            var url = 'https://data.nasa.gov/resource/gh4g-9sfh.json?'
            + '$where=year >= \''
            + inputMin
            + '\' AND year < \''
            + inputMax + '\''
              +'&$limit=50000'
              +'&$$app_token=tLLDhTKjLKruR1AmC4EMRiqYA';

            getSodaData(url);
        });
        function getSodaData(url) {

          $.getJSON(url, function(data, textstatus) {
            console.log(data);
              $.each(data, function(i, entry) {
                  var marker = new google.maps.Marker({
                      position: new google.maps.LatLng(data[i].reclat,
                          data[i].reclong),
                      map: map,
                      title: location.name
                  });
              });
          });
        }
    };
