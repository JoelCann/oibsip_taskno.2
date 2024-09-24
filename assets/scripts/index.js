function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easing(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var home = document.querySelector("#hero-section");
var services = document.querySelector("#services");

var homeLink = document.querySelector('nav a[href="hero-section"]');
var servicesLink = document.querySelector('nav a[href="#services"]');

homeLink.addEventListener("click", function () {
  smoothScroll("#hero-section", 1000);
});

servicesLink.addEventListener("click", function () {
  smoothScroll("#services", 1000);
});
