document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".title-banner").forEach(banner => {
    banner.addEventListener('click', () => {
  
      const targetId  = banner.dataset.jump;
      const targetEl  = document.getElementById(targetId);
  
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
      const textEl = targetEl.querySelector('.tl-text');
  
      if (textEl) {
        textEl.classList.add('highlight-glow');
  
        setTimeout(() => {
          textEl.classList.remove('highlight-glow');
        }, 1500);
      }
    });
  });

});
