// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmacS82JsE-WXAAoUUKLkvb7Fwn2lhNSY",
  authDomain: "ilhamdinda-31575.firebaseapp.com",
  databaseURL: "https://ilhamdinda-31575-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ilhamdinda-31575",
  storageBucket: "ilhamdinda-31575.appspot.com",
  messagingSenderId: "881961207010",
  appId: "1:881961207010:web:eb106df8d6a58dca1f4abb",
  measurementId: "G-YPHEP71G2X"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);
// getToken(messaging, {vapidKey: "BPyQEWL_eNmjzNQ_wpx30XLdsop2qYUexmqacHAvKUJtxKXoVWZKQP610FbPYpw9Fm_UvVaJHs7BPP1ONm5BAoc"});
// export const analytics = getAnalytics(app);

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "/firebase-logo.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });