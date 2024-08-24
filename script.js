function filterImages(category) {
    let items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  document.getElementById('search-bar').addEventListener('input', function () {
    let searchQuery = this.value.toLowerCase();
    let items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
      let title = item.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  function openLightbox(img) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  