document.getElementById('thriftEnquiryForm').addEventListener('submit', function(event) {
    // Intercept default form refresh
    event.preventDefault();

    // Fields
    const nameField = document.getElementById('fullName');
    const emailField = document.getElementById('emailAddress');
    const queryField = document.getElementById('userQuery');
    
    let isFormValid = true;

    // 1. Validate Name
    if (nameField.value.trim() === '') {
        flagError(nameField);
        isFormValid = false;
    } else {
        removeError(nameField);
    }

    // 2. Validate Email
    if (!isValidEmail(emailField.value.trim())) {
        flagError(emailField);
        isFormValid = false;
    } else {
        removeError(emailField);
    }

    // 3. Validate Query
    if (queryField.value.trim() === '') {
        flagError(queryField);
        isFormValid = false;
    } else {
        removeError(queryField);
    }

    // If all validation points clear, show the success window
    if (isFormValid) {
        // Ready to submit data bundle (e.g. to a backend server)
        console.log('Enquiry Sent:', {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            query: queryField.value.trim()
        });

        // Hide form and display matching success state
        document.getElementById('thriftEnquiryForm').classList.add('hidden');
        document.querySelector('.form-subtitle').classList.add('hidden');
        document.getElementById('successCard').classList.remove('hidden');
    }
});

// Helper validation structural logic functions
function flagError(element) {
    element.parentElement.classList.add('invalid');
}

function removeError(element) {
    element.parentElement.classList.remove('invalid');
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}