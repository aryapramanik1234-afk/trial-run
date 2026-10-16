(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const mobileBreakpoint = window.matchMedia("(max-width: 840px)");

  const closeNavigation = ({ returnFocus = false } = {}) => {
    if (!navToggle || !primaryNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    primaryNav.classList.remove("is-open");
    if (returnFocus) navToggle.focus();
  };

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      primaryNav.classList.toggle("is-open", !isOpen);
    });

    primaryNav.addEventListener("click", (event) => {
      if (event.target.closest("a[href^='#']")) closeNavigation();
    });

    document.addEventListener("click", (event) => {
      if (
        navToggle.getAttribute("aria-expanded") === "true" &&
        !event.target.closest(".primary-nav") &&
        !event.target.closest(".nav-toggle")
      ) {
        closeNavigation();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        closeNavigation({ returnFocus: true });
      }
    });

    const resetNavigationAtDesktop = (event) => {
      if (!event.matches) closeNavigation();
    };
    if (mobileBreakpoint.addEventListener) {
      mobileBreakpoint.addEventListener("change", resetNavigationAtDesktop);
    } else {
      mobileBreakpoint.addListener(resetNavigationAtDesktop);
    }
  }

  // Keep locally hosted content usable if a photo is missing or a path changes.
  document.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackAttempted === "true") {
        image.classList.add("image-unavailable");
        return;
      }

      image.dataset.fallbackAttempted = "true";
      const fallback = image.dataset.fallback;
      if (fallback) {
        image.src = fallback;
      } else {
        image.classList.add("image-unavailable");
      }
    });
  });

  // A quiet reveal on scroll; content remains visible when motion is reduced or JS is unavailable.
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (!prefersReducedMotion && "IntersectionObserver" in window && revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    revealElements.forEach((element) => {
      element.classList.add("reveal-ready");
      revealObserver.observe(element);
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
