/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
// used for download CV function ==> when click , view directed to  contact section
// function delay (URL, ms) {
//   setTimeout( function() { window.location = URL }, ms);
// }




// connect and save to firebase

// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAwrZbgelFSpO7B_J_Giue-UhHPo9ytVnY",
  authDomain: "johan-ambarita-68258.firebaseapp.com",
  databaseURL: "https://johan-ambarita-68258.firebaseio.com",
  projectId: "johan-ambarita-68258",
  storageBucket: "johan-ambarita-68258.appspot.com",
  messagingSenderId: "647402498758",
  appId: "1:647402498758:web:a5b773c661792dc3fd05c7",
  measurementId: "G-5WJZCNBG9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
const messagesRef = firebase.database().ref('messages');


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


