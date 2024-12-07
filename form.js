
import { db, auth } from './config.js'; // Ensure you import necessary modules
import { addDoc, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Ensure the user is logged in
    if (!auth.currentUser) {
        console.error("No user is logged in.");
        return;
    }

    try {
        // Add data to Firestore
        const docRef = await addDoc(collection(db, "posts"), {
            title: title.value,
            description: description.value,
            uid: auth.currentUser.uid
        });
        
        console.log("Document written with ID: ", docRef.id);
        
        // Fetch and display data from Firestore
        await getDataFromFirestore();

        // Redirect after successful submission
        window.location.href = "./form.html";

    } catch (e) {
        console.error("Error adding document: ", e);
    }
});

// Function to get data from Firestore
async function getDataFromFirestore() {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    
    querySnapshot.forEach((doc) => {
        arr.push(doc.data());
    });

    console.log(arr); 
    
    // Display data (You can add logic to render cards here)
    arr.forEach(item => {
        // Example of rendering data as cards
        createCard(item);
    });
}

// Function to create and append cards to the UI
function createCard(item) {
    const cardContainer = document.querySelector('#card-container'); // Ensure this exists in the DOM

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;

    // Add card to the container
    cardContainer.appendChild(card);
}

