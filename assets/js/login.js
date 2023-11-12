// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAv49EcXt4MKkexLfwYprmUfj5Cihr0u6w",
//   authDomain: "puma-auth.firebaseapp.com",
//   projectId: "puma-auth",
//   storageBucket: "puma-auth.appspot.com",
//   messagingSenderId: "405426521195",
//   appId: "1:405426521195:web:16ee3865ebc9b2b96cdd2e",
//   measurementId: "G-SN91F3G76J",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// const userEmail = document.getElementById("email-");
// const userPassword = document.getElementById("password-");

// const authPopup = document.getElementById("popup");

// const content = document.getElementById("main");

// const userSignIn = document.getElementById("usersign-in");
// const userSignUp = document.getElementById("usersign-up");
// const userOut = document.getElementById("sigout");

// const userSign = async () => {
//   const email = userEmail.value;
//   const password = userPassword.value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCreditantial) => {
//       const user = userCreditantial.user;
//       console.log(user);
//       alert("Your account has been created successfully");

//       document.getElementById("sign-in--popup").style.right = `250px`;
//     })
//     .catch((error) => {
//       const erroCode = error.code;
//       const errorMessage = error.message;
//       alert("error");
//       console.log(erroCode + errorMessage);
//     });
// };

// const userSignIN = async () => {
//   const signInemail = userEmail.value;
//   const signInpassword = userPassword.value;
//   signInWithEmailAndPassword(auth, signInemail, signInpassword)
//     .then((userCreditantial) => {
//       const user = userCreditantial.user;
//       console.log(user);
//       alert("You have sign in successfully");
//     })
//     .catch((error) => {
//       const erroCode = error.code;
//       const errorMessage = error.message;
//       alert("error");
//       console.log(erroCode + errorMessage);
//     });
// };

// const checkAuthState = async () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       authPopup.style.display = "none";
//     } else {
//       authPopup.style.display = "flex";
//     }
//   });
// };

// // ----------------------- Sign Out

// const userSignOut = async () => {
//   await signOut(auth);
// };

// checkAuthState();

// userSignUp.addEventListener("click", userSign);
// userSignIn.addEventListener("click", userSignIN);
// userSignOut.addEventListener("click", userSignOut);

// //

//
const usersignin = document.querySelector("#usersignin");
const signup = document.querySelector(".usersignup");
const signupp = document.querySelector(".signup");
const userId = document.getElementById("userId");

userId.addEventListener("click", () => {
  document.getElementById("sign-in").style.display = "flex";
})

usersignin.addEventListener("click", () => {
  document.querySelector("#sign-in--popup").style.right = "0px";
  document.querySelector(".log-main").style.left = "300px";
});

signup.addEventListener("click", () => {
  document.querySelector(".log-main").style.left = "-300px";
  document.querySelector("#sign-up--popup").style.left = "0px";
});

signupp.addEventListener("click", () => {
  document.querySelector("#sign-in--popup").style.right = "300px";
  document.querySelector("#sign-up--popup").style.left = "0px";
});
