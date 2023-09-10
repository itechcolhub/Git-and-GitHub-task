// JavaScript for signin.html
// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('p');
    const toggleButton = document.getElementById('toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

// Add event listener to the "Show" button
const toggleButton = document.getElementById('toggle-password');
if (toggleButton) {
    toggleButton.addEventListener('click', togglePasswordVisibility);
}


