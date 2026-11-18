const revealTargets = document.querySelectorAll(".project, .about-grid, .section-heading");
revealTargets.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(24px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";
});
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = "1";
    entry.target.style.transform = "translateY(0)";
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });
revealTargets.forEach((element) => revealObserver.observe(element));
