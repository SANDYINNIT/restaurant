// images.js
// Handles click-to-enlarge for menu images

document.addEventListener('DOMContentLoaded', function() {
  const imgModal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = imgModal.querySelector('.close');

  // Open modal on image click
  document.querySelectorAll('table img').forEach(image => {
    image.addEventListener('click', () => {
      modalImg.src = image.src;
      imgModal.style.display = 'flex';  // Use flex to center content
    });
  });

  // Close modal on close button click
  closeBtn.addEventListener('click', () => {
    imgModal.style.display = 'none';
  });

  // Close modal on outside click
  imgModal.addEventListener('click', (e) => {
    if (e.target === imgModal) {
      imgModal.style.display = 'none';
    }
  });
});
