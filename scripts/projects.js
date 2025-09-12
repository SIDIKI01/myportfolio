// Projects functionality

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');
  const projectBtns = document.querySelectorAll('.project-btn');
  const projectTemplates = document.getElementById('project-templates');
  
  // Open modal when project button is clicked
  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const projectContent = document.getElementById(`${projectId}-content`);
      
      if (projectContent) {
        modalBody.innerHTML = projectContent.innerHTML;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      }
    });
  });
  
  // Close modal when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeModal();
    });
  }
  
  // Close modal when clicking outside of the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
  
  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const img = card.querySelector('.project-image img');
      if (img) {
        img.style.transform = 'scale(1.05)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('.project-image img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });
}
