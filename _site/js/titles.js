document.addEventListener("DOMContentLoaded", () => {

  // バナー → 年表位置へ移動
  document.querySelectorAll(".title-banner").forEach(banner => {
    banner.addEventListener('click', () => {
  
      const targetId  = banner.dataset.jump;
      const targetEl  = document.getElementById(targetId);
  
      // スクロール
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
      // ハイライト対象 → タイムライン内の .tl-text
      const textEl = targetEl.querySelector('.tl-text');
  
      if (textEl) {
        textEl.classList.add('highlight-glow');
  
        // 終わったらクラスを消して再利用可能に
        setTimeout(() => {
          textEl.classList.remove('highlight-glow');
        }, 1500);
      }
    });
  });

});