$("#openmenu").click(function(){
  $("#menu").toggleClass("open");
  $("#googleMap").toggleClass("open");
  $("#closemenu").toggleClass("open");
});

var handlesSlider = document.getElementById('slider-handles');

$("#slider-years").ionRangeSlider({
    type: "double",
    grid: true,
    min: 861,
    max: 2013,
    from: 861,
    to: 1000,
    prefix: "Year "
});
