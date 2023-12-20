//"use strict";
//if( 'function' === typeof importScripts) {
    importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");
    // @ts-ignore
    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDd6Uaqe2FaUc8W5JiVyWKy1StTfWK6I_4",
        authDomain: "netguards-1c84b.firebaseapp.com",
        projectId: "netguards-1c84b",
        storageBucket: "netguards-1c84b.appspot.com",
        messagingSenderId: "289160473467",
        appId: "1:289160473467:web:2f208e0c101be51100abde",
        measurementId: "G-N34ECMV5Z2"
    });
    // @ts-ignore
    const messaging = firebase.messaging();

    navigator.serviceWorker.register('/netguard/firebase-messaging-sw.js', {scope: '/netguard/'}).then(function(reg){
        console.log("SW registration succeeded. Scope is "+reg.scope);
        messaging.useServiceWorker(reg);
    }).catch(function(err){
        console.error("SW registration failed with error "+err);
    });
//}