// Animate tagline when page loads
window.addEventListener("load", () => {
  const tagline = document.querySelector(".tagline");
  tagline.style.transition = "all 1.5s ease";
  tagline.style.opacity = "1";
  tagline.style.transform = "translateX(0)";
});
