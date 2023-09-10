// JavaScript for register.html
// Function to check if passwords match
function checkPasswordsMatch() {
    const password1 = document.getElementById('password1').value; // Get password input value
    const confirmPassword = document.getElementById('checkpassword').value; // Get confirm password input value

    const confirmPasswordField = document.getElementById('checkpassword');
    
    if (password1 !== confirmPassword) {
        confirmPasswordField.setCustomValidity("Passwords don't match");
    } else {
        confirmPasswordField.setCustomValidity('');
    }
}

// Add event listeners for password confirmation
document.getElementById('password1').addEventListener('input', checkPasswordsMatch);
document.getElementById('checkpassword').addEventListener('input', checkPasswordsMatch);

// Event listener for form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    if (!this.checkValidity()) {
        e.preventDefault();
    }
});

const birthdateField = document.getElementById('birthdate');
const signUpForm = document.getElementById('signup-form');
const today = new Date();
const minDate = new Date('1900-01-01');
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

// Event listener for birthdate validation
birthdateField.addEventListener('input', function () {
    const selectedDate = new Date(birthdateField.value);
    
    if (selectedDate < minDate || selectedDate > maxDate) {
        birthdateField.setCustomValidity("Please enter a valid birthdate (between 1/1/1900 and at least 18 years old).");
    } else {
        birthdateField.setCustomValidity('');
    }
});

/////////


