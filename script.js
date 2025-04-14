document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  });
});
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the box when it scrolls into view
gsap.to(".animated-box", {
  scrollTrigger: {
    trigger: ".animated-box",
    start: "top 80%",
    // toggleActions can control play/pause/reverse
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out"
});