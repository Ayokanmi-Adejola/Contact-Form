# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repository]()
- Live Site URL: [Live Demo]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript for form validation

### What I learned

This project was a great opportunity to practice building accessible forms. I focused on implementing proper form validation with clear error messages and ensuring the form is fully accessible for keyboard navigation and screen readers.

Some key aspects I implemented:

```html
<!-- Accessible form elements with ARIA attributes -->
<div class="form-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" name="email" aria-required="true" aria-describedby="emailError">
  <p id="emailError" class="error-message" role="alert">This field is required</p>
</div>
```

```css
/* Focus states for accessibility */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--green-600);
  box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.1);
}

/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

```js
// Form validation with accessibility announcements
function setError(inputElement, errorId, errorMessage) {
  const formGroup = inputElement.closest('.form-group') || inputElement.closest('.checkbox-group');
  formGroup.classList.add('error');

  const errorElement = document.getElementById(errorId);
  errorElement.textContent = errorMessage;

  // Announce error to screen readers
  const errorAnnouncement = document.getElementById('errorAnnouncement');
  errorAnnouncement.textContent = `Error: ${errorMessage} for ${inputElement.labels[0].textContent.trim()}`;
}
```

### Continued development

In future projects, I would like to focus more on:

- Implementing more complex form validation patterns
- Creating custom form elements that maintain accessibility
- Exploring animation and transitions for form feedback
- Implementing form submission with actual backend integration

### Useful resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Comprehensive guide on form validation techniques.
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/tutorials/forms/) - Excellent resource for learning about accessible forms.
- [CSS-Tricks - Form Styling](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/) - Helpful for styling form elements while maintaining accessibility.

## Author

- Website - [Ayokanmi Adejola](https://ayokanmi-adejola-portfolio.netlify.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
