// menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
const keenSlider = new KeenSlider(
  "#keen-slider",
  {
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  },
  []
);

const keenSliderPrevious = document.getElementById("keen-slider-previous");
const keenSliderNext = document.getElementById("keen-slider-next");

const keenSliderPreviousDesktop = document.getElementById(
  "keen-slider-previous-desktop"
);
const keenSliderNextDesktop = document.getElementById(
  "keen-slider-next-desktop"
);

keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
keenSliderNext.addEventListener("click", () => keenSlider.next());

keenSliderPreviousDesktop.addEventListener("click", () => keenSlider.prev());
keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
