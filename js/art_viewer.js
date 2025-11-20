  const thumbs = document.querySelectorAll('.art-thumb');
  const viewer = document.getElementById('viewer');
  const viewerImg = document.getElementById('viewer-img');

  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      viewerImg.src = img.src;
      viewer.classList.remove('hidden');
    });
  });

  viewer.addEventListener('click', () => {
    viewer.classList.add('hidden');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      viewer.classList.add('hidden');
    }
  });