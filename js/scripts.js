//  Carousel

 $(document).ready(function () {
  $(".carousel").slick({
   dots: false,
   arrows: false,
  });
  });
  
//Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};
