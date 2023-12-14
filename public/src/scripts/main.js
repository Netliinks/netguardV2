import { SignIn } from "./login.js";
navigator.serviceWorker.register("firebase-messaging-sw.js");
new SignIn().checkSignIn();
