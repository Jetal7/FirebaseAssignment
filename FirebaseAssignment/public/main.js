const firebaseConfig = {
  apiKey: "AIzaSyAMhpDpR7QxhhFCUhjEnRTu7q1f6pNIe4o",
  authDomain: "assignment2fb.firebaseapp.com",
  databaseURL: "https://assignment2fb-default-rtdb.firebaseio.com",
  projectId: "assignment2fb",
  storageBucket: "assignment2fb.appspot.com",
  messagingSenderId: "306794653925",
  appId: "1:306794653925:web:f9e2304e203132144b4c0c"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
//var messagesRef = firebase.database().ref('messages');
var messagesRef = firebase.database().ref();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

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
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}



