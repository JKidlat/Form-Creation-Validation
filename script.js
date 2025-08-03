javascript
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div using their IDs
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Retrieve and trim the values from the input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---
        // 1. Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // 2. Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // 3. Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- Displaying Feedback ---
        // Make the feedback div visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // If all validations pass, display a success message with inline styling
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            // If validations fail, join the error messages and display them with inline styling
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    });