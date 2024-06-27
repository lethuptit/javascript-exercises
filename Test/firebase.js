// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUVh7A52kERo1BMmbFSWOhvFGPVKEaKw",
  authDomain: "myfirebaseapp-adf39.firebaseapp.com",
  projectId: "myfirebaseapp-adf39",
  storageBucket: "myfirebaseapp-adf39.appspot.com",
  messagingSenderId: "529608957184",
  appId: "1:529608957184:web:87d11735af837b077527e5",
  measurementId: "G-MRYWFLNBGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Your web app firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCqqzKlXxcueL-KNiU5_cqqC0KlUoYZpvo",
//     authDomain: "fir-authdemo-3d71a.firebaseapp.com",
//     projectId: "fir-authdemo-3d71a",
//     storageBucket: "fir-authdemo-3d71a.appspot.com",
//     messagingSenderId: "1016264373597",
//     appId: "1:1016264373597:web:ec424f9cebe568bf7324b4"
//   };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  
  const auth = firebase.auth()
  
  //register functionality
  
  const registerEmail = document.getElementById("email_register")
  const registerPassword = document.getElementById("password_register")
  const btn_register = document.getElementById("btnRegister")
  
  btn_register.addEventListener("click", (e) => {
    e.preventDefault();
  
    //read the value of email and password on click of the button
  
    const email = registerEmail.value;
    const password = registerPassword.value;
  
    // console.log(email, password)
  
    // create user
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      // console.log(cred)
      const uid = cred.user.uid
      console.log("User created", uid)
    }).catch((error) => {
      console.log("sign in error", error)
    })
  
  })
  
  //login functionality
  
  const loginEmail = document.getElementById("email_login")
  const loginPassword = document.getElementById("password_login")
  const btn_login = document.getElementById("btnLogin")
  
  //add event listener
  
  btn_login.addEventListener('click', (event) => {
    event.preventDefault()
  
    //receive the values of login input on click of the button
    const email = loginEmail.value;
    const password = loginPassword.value;
  
    auth.signInWithEmailAndPassword(email, password).then((credVal)=>{
      console.log("User is logged in", credVal.user.uid)
    }).catch(function(error){
      console.log("error", error)
    })
  })