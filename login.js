import { auth ,  db } from './config.js';
import { onAuthStateChanged ,  signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { collection, addDoc,  getDocs} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"; 



//.......statechange...   ....
onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
    console.log(uid);
    } 
    else {
        window.location = "index.html"
    
    }
  });

// بٹن کے ریفرنس کو حاصل کریں
const logoutButton = document.querySelector('#logout-btn');

// ایونٹ ہینڈلر شامل کریں
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('Logout successfully');
            window.location = 'index.html';
        })
        .catch((error) => {
            console.log('Error:', error);
        });
});

//......post js adddata cloud store.......


const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    
     if (!auth.currentUser) {
        console.error("No user is logged in.");
         return;
     }

try {
    const docRef = await addDoc(collection(db, "posts"), {
     title:title.value,
     description:description.value,
     uid:auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);
    getDataFromFirestore()
  } 
 catch (e) {
    console.error("Error adding document: ", e);
    
  }});

    //......get data from firestore.....

 
 async function getDataFromFirestore() {
    const arr = []
    const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
    arr.push(doc.data());  
}); 
console.log(arr); 
     arr.map((item)=>{
    
})
}  
getDataFromFirestore()
