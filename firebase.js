
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth , GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCsqHJnCRjOmHFOYk7GXZmHUF7XyTqjY2Q",
    authDomain: "hope-bec62.firebaseapp.com",
    projectId: "hope-bec62",
    storageBucket: "hope-bec62.firebasestorage.app",
    messagingSenderId: "597759615851",
    appId: "1:597759615851:web:d3a30ab2b7711c682f222e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.languageCode = 'en'

const provider = new GoogleAuthProvider();

const googleLogin =document.getElementById("google-btn");
googleLogin.addEventListener("click" ,function(){


  signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const user = result.user;
  console.log(user);
  window.location.href = "../Hope/report.html";


}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});


})

function updateUserProfile(user){
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfileProfile = user.photoURL;

  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;


}