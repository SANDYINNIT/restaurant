    // Get elements
    const modal = document.getElementById('privacyModal');
    const openBtn = document.getElementById('privacyLink');
    const closeBtn = document.getElementById('closeBtn');

    // Open modal
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // Close when clicking outside content
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });