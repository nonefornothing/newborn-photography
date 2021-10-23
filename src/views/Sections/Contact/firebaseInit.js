/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import firebase from 'firebase'


// input form animation
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  const parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  const parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const email = getInputVal('email');
  const phone = getInputVal('phone');
  const message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name,
    email,
    phone,
    message
  });
}




const firebaseConfig = {
  apiKey: "AIzaSyBHz4WhY3CoU-B3LjQ3TgK7XxQGi6AVtt8",
  authDomain: "newborn-tangerang.firebaseapp.com",
  projectId: "newborn-tangerang",
  storageBucket: "newborn-tangerang.appspot.com",
  messagingSenderId: "484344827014",
  appId: "1:484344827014:web:684f7f57c3b3a1d5e69507",
  measurementId: "G-Z09P4PYX9N"
};

// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);
export default firebaseInit;

