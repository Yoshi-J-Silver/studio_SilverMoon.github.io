document.addEventListener("DOMContentLoaded", () => {
  const row = document.getElementById("artRow");
  const left = document.querySelector(".arrow.left");
  const right = document.querySelector(".arrow.right");

  const scrollAmount = 500;

  left.addEventListener("click", () => {
    row.scrollLeft -= scrollAmount;
  });

  right.addEventListener("click", () => {
    row.scrollLeft += scrollAmount;
  });
});