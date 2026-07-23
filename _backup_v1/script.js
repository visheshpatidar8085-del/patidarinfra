/* =========================================================================
   PATIDAR INFRA — interactions
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Mobile hamburger menu ---- */
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu after tapping a link
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Scroll-reveal (fade-up) ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
