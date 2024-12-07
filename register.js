import { auth } from './config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Get form and modal elements
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const successModal = document.querySelector('#success-modal');
const closeModalButton = document.querySelector('#close-modal');

// Form submission event
form.addEventListener('submit', (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("User registered:", userCredential.user);
            email.value = "";
            password.value = "";
            showSuccessModal(); // Show success modal
            window.location.href = './index.html'
        })
        .catch((error) => {
            console.error("Error Code:", error.code);
            console.error("Error Message:", error.message);
        });
});

// Function to show modal
function showSuccessModal() {
    successModal.classList.add('show');
    successModal.classList.remove('hidden');
}

// Close modal event
closeModalButton.addEventListener('click', () => {
    successModal.classList.remove('show');
    successModal.classList.add('hidden');
});
