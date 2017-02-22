$("#openmenu").click(function(){
  $("#menu").toggleClass("open");
  $("#googleMap").toggleClass("open");
  $("#closemenu").toggleClass("open");
});

 $("#slider").editRangeSlider({
   bounds: {
       min: 1600,
       max: 2013
   },
   defaultValues: {
        min: 2000,
        max: 2013
    }
 });

 $('#submitButton').on('click', function() {
     // Base SODA endpoint. Leave off .json file type so we can use it later for csv download
     baseURL = 'https://data.fortworthtexas.gov/resource/i85s-46fv';

     // Get the selected dates from the slider
     inputMax = $("#slider").editRangeSlider("max");
     inputMin = $("#slider").editRangeSlider("min");

     // Sample API call: https://data.fortworthtexas.gov/resource/i85s-46fv.json?$where=codate >= '2014-07-01' AND codate < '2014-07-31'

     // Format the min and max date into YYYY-MM-DD required for SODA
     inputMax = moment(inputMax)
       .add(1, 'days')
       .format("YYYY-MM-DD");

     inputMin = moment(inputMin)
       .format("YYYY-MM-DD");

     // Build the API call
     var apiCall = baseURL
       + '.json?$where=codate >= \''
       + inputMin
       + '\' AND codate < \''
       + inputMax + '\'';

     getSodaData(apiCall);
 });
