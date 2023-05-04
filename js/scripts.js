//  Carousel

$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    arrows: false,
    fade: true,
    speed: 500,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
  });
});

//Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

/* Counter */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 250;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
