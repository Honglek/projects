$(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 287, 3000);
  counter("count2", 0, 603, 2500);
  counter("count3", 0, 1687, 3000);
  counter("count4", 0, 587, 7000);
});
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");
      if (targetId === "#") {
        var targetPosition = 0;
      } else {
        var targetElement = document.querySelector(targetId);
        var headerHeight =
          document.querySelector(".navigation-wrap").offsetHeight;
        var targetPosition = targetElement.offsetTop - headerHeight; // Offset by 50px
      }
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});
