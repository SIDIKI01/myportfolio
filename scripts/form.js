// Form validation and submission

function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form inputs
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      // Basic validation
      let isValid = true;
      
      // Validate name    
      if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
      } else {
        removeError(nameInput);
      }
      
      // Validate email
      if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
      } else {
        removeError(emailInput);
      }
      
      // Validate subject
      if (subjectInput.value.trim() === '') {
        showError(subjectInput, 'Subject is required');
        isValid = false;
      } else {
        removeError(subjectInput);
      }
      
      // Validate message
      if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
      } else {
        removeError(messageInput);
      }
      
      // If all fields are valid, simulate form submission
      if (isValid) {
        // In a real application, you would send the form data to a server
        simulateFormSubmission(contactForm);
      }
    });
    
    // Add input event listeners to clear errors when user types
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
      input.addEventListener('input', () => {
        removeError(input);
      });
    });
  }
  
  // Helper function to show error message
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorElement = formGroup.querySelector('.error-message');
    
    // Create error element if it doesn't exist
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'error-message';
      errorElement.style.color = 'var(--danger-color)';
      errorElement.style.fontSize = 'var(--font-sm)';
      errorElement.style.marginTop = '5px';
      errorElement.style.display = 'block';
      formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    input.style.borderColor = 'var(--danger-color)';
  }
  
  // Helper function to remove error message
  function removeError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
      errorElement.remove();
    }
    
    input.style.borderColor = '';
  }
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Simulate form submission with email acknowledgment
  function simulateFormSubmission(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Disable form and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Reset form and show success message
      form.reset();
      
      // Create success message with email acknowledgment
      const formContainer = form.closest('.contact-form-container');
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
      successMessage.style.color = 'var(--success-color)';
      successMessage.style.padding = 'var(--spacing-md)';
      successMessage.style.borderRadius = 'var(--border-radius-sm)';
      successMessage.style.marginBottom = 'var(--spacing-md)';
      successMessage.style.textAlign = 'center';
      successMessage.style.border = '2px solid var(--success-color)';
      successMessage.innerHTML = `
        <i class="fas fa-check-circle" style="margin-right: 8px; font-size: 1.2em;"></i>
        <strong>Message envoyé avec succès !</strong><br>
        <small>Un accusé de réception a été envoyé à votre adresse email.</small>
      `;
      
      // Insert success message before the form
      formContainer.insertBefore(successMessage, form);
      
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      
      // Remove success message after 8 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 8000);
    }, 1500);
  }
}