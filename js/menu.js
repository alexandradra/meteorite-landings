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
