document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".circle-text span");
  const total = letters.length;

  letters.forEach((span, i) => {
    const angleStart = 130;
    const angle = angleStart + (180 / (total - 1)) * (total - 1 - i);
    span.style.transform = `rotate(${angle}deg) translate(0, -120px) rotate(${-angle}deg)`;
    span.style.animationDelay = `${i * 0.5}s`;
  });
});
