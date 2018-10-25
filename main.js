$(document).ready(function() {
  $(".nav-collapse-btn").on("click", function(event) {
    $(".nav-collapse-btn span:nth-child(1)").toggleClass("span-cross-1");
    $(".nav-collapse-btn span:nth-child(2)").toggleClass("span-cross-2");
    $(".nav-collapse-btn span:nth-child(3)").toggleClass("span-cross-3");
    $(".container-bg").toggleClass("container-bg-expand");
    setTimeout(function() {
          $(".container-bg").toggleClass("nav-transition-out");
        }, 800);
    $(".container-bg ul li").toggleClass("nav-ul-li-showed");
  });
});
