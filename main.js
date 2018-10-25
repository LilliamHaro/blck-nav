// window.onload = function() {
//   var navBtn = document.getElementById("nav-collapse-btn");
//   var collapseNav = document.getElementById("container-bg");
//   var navLi = collapseNav.querySelectorAll("li");
//   console.log(navLi)
//   navBtn.addEventListener("click", function(event) {
//     navBtn.children[0].classList.toggle("span-cross-1");
//     navBtn.children[1].classList.toggle("span-cross-2");
//     navBtn.children[2].classList.toggle("span-cross-3");
//     collapseNav.classList.toggle("container-bg-expand");
//     navLi.classList.add("nav-ul-li-showed");
//   });
// };

$(document).ready(function() {
  $(".nav-collapse-btn").on("click", function(event) {
    $(".nav-collapse-btn span:nth-child(1)").toggleClass("span-cross-1");
    $(".nav-collapse-btn span:nth-child(2)").toggleClass("span-cross-2");
    $(".nav-collapse-btn span:nth-child(3)").toggleClass("span-cross-3");
    $(".container-bg").toggleClass("container-bg-expand");
    setTimeout(function() {
          $(".container-bg").toggleClass("nav-transition-out");
        }, 1000);
    $(".container-bg ul li").toggleClass("nav-ul-li-showed");
  });


  // $(".minimized").on("click", function(event) {
  //   $(this).addClass("expanded");
  //   $(".nav-collapse-btn span:nth-child(1)").addClass("span-cross-1");
  //   $(".nav-collapse-btn span:nth-child(2)").addClass("span-cross-2");
  //   $(".nav-collapse-btn span:nth-child(3)").addClass("span-cross-3");
  //   $(".container-bg").addClass("container-bg-expand");
  //   setTimeout(function() {
  //     $(".container-bg").removeClass("nav-transition-out");
  //   }, 500);
  //   $(".container-bg ul li").addClass("nav-ul-li-showed");
  //   $(this).removeClass("minimized");
  // });

  // $(".expanded").on("click", function(event) {
  //   // $(this).addClass("minimized");
  //   // $(this).removeClass("expanded");
  //   $(".nav-collapse-btn span:nth-child(1)").removeClass("span-cross-1");
  //   $(".nav-collapse-btn span:nth-child(2)").removeClass("span-cross-2");
  //   $(".nav-collapse-btn span:nth-child(3)").removeClass("span-cross-3");
  //   $(".container-bg").removeClass("container-bg-expand");
  //   setTimeout(function() {
  //     $(".container-bg").removeClass("nav-transition-out");
  //   }, 500);
  //   $(".container-bg ul li").removeClass("nav-ul-li-showed");
  // });
});
