$(document).ready(function() {
  $(".nav-collapse-btn").on("click", function(event) {
    $(".nav-collapse-btn span:nth-child(1)").toggleClass("span-cross-1");
    $(".nav-collapse-btn span:nth-child(2)").toggleClass("span-cross-2");
    $(".nav-collapse-btn span:nth-child(3)").toggleClass("span-cross-3");
    $(".container-bg").toggleClass("container-bg-expand");
    setTimeout(function() {
      $(".container-bg").toggleClass("nav-transition-out");
      $(".container-bg ul li").toggleClass("container-bg-ul-li-close");
    }, 800);
    $(".container-bg ul li").toggleClass("nav-ul-li-showed");
  });
});

setTimeout(function() {
  $(".slider-3").addClass("impar");
}, 1500);
setTimeout(function() {
  $(".slider-2").addClass("par");
}, 4500);
setTimeout(function() {
  $(".slider-3").removeClass("impar");
  $(".slider-2").removeClass("par");
}, 6000);

setInterval(function(){ 
  setTimeout(function() {
    $(".slider-3").addClass("impar");
  }, 1500);
  setTimeout(function() {
    $(".slider-2").addClass("par");
  }, 4500);
  setTimeout(function() {
    $(".slider-3").removeClass("impar");
    $(".slider-2").removeClass("par");
  }, 6000);
 },7000);

