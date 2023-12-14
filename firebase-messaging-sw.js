//"use strict";
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");
// @ts-ignore
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8JRIkrHmIVgbbx_4Xb59unO8sQOQzTnA",
    authDomain: "netlinks-sa.firebaseapp.com",
    projectId: "netlinks-sa",
    storageBucket: "netlinks-sa.appspot.com",
    messagingSenderId: "847632298059",
    appId: "1:847632298059:web:614fadb251beb57e8a1dce",
    measurementId: "G-YWSED77X1F"
});
// @ts-ignore
const messaging = firebase.messaging();
