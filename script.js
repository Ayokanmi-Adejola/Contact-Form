document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  
  // Form validation
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset previous errors
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
      element.classList.remove('error');
    });
    
    let isValid = true;
    
    // Validate first name
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim()) {
      setError(firstName, 'firstNameError', 'This field is required');
      isValid = false;
    }
    
    // Validate last name
    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
      setError(lastName, 'lastNameError', 'This field is required');
      isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email');
    if (!email.value.trim()) {
      setError(email, 'emailError', 'This field is required');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      setError(email, 'emailError', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate query type
    const queryType = document.getElementById('queryType');
    if (queryType.value === '') {
      setError(queryType, 'queryTypeError', 'Please select a query type');
      isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
      setError(message, 'messageError', 'This field is required');
      isValid = false;
    }
    
    // Validate consent
    const consent = document.getElementById('consent');
    if (!consent.checked) {
      setError(consent, 'consentError', 'To submit this form, please consent to being contacted');
      isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
      contactForm.style.display = 'none';
      successMessage.style.display = 'block';
      
      // Announce success message to screen readers
      const successAnnouncement = document.getElementById('successAnnouncement');
      successAnnouncement.textContent = 'Form submitted successfully. Message sent!';
      
      // Reset form for future submissions
      contactForm.reset();
      
      // Optional: Hide success message after some time and show form again
      setTimeout(() => {
        successMessage.style.display = 'none';
        contactForm.style.display = 'block';
        successAnnouncement.textContent = '';
      }, 5000);
    }
  });
  
  // Helper function to set error messages
  function setError(inputElement, errorId, errorMessage) {
    const formGroup = inputElement.closest('.form-group') || inputElement.closest('.checkbox-group');
    formGroup.classList.add('error');
    
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = errorMessage;
    
    // Announce error to screen readers
    const errorAnnouncement = document.getElementById('errorAnnouncement');
    errorAnnouncement.textContent = `Error: ${errorMessage} for ${inputElement.labels[0].textContent.trim()}`;
    
    // Focus on the first invalid field
    if (!document.querySelector('.error input:focus, .error select:focus, .error textarea:focus')) {
      inputElement.focus();
    }
  }
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Add input event listeners to clear errors when user types
  const formInputs = contactForm.querySelectorAll('input, select, textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      const formGroup = input.closest('.form-group') || input.closest('.checkbox-group');
      if (formGroup.classList.contains('error')) {
        formGroup.classList.remove('error');
        
        // Clear screen reader announcement
        const errorAnnouncement = document.getElementById('errorAnnouncement');
        errorAnnouncement.textContent = '';
      }
    });
  });
});
