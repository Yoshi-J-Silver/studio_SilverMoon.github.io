document.addEventListener("DOMContentLoaded", () => {

  // バナー → 年表位置へ移動
  document.querySelectorAll(".title-banner").forEach(banner => {
    banner.addEventListener("click", () => {
      const id = banner.dataset.jump;
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 120,
          behavior: "smooth"
        });
      }
    });
  });

});
