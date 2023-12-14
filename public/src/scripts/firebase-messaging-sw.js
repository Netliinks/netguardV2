"use strict";
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");
// @ts-ignore
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0de3v63rcTp6MB_q5r4IiGFhLkVYm6io",
    authDomain: "libreriasjs-pnotifications.firebaseapp.com",
    projectId: "libreriasjs-pnotifications",
    storageBucket: "libreriasjs-pnotifications.appspot.com",
    messagingSenderId: "892795652792",
    appId: "1:892795652792:web:e01b4ff96316b6bb7c024d",
});
// @ts-ignore
const messaging = firebase.messaging();
