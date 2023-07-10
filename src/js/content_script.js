import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

var config = {
    apiKey: "AIzaSyCoR1FGtRhfHG_IeYvZKgYJdRhxfEqiOdc",
    authDomain: "cewf-id.firebaseapp.com",
    projectId: "cewf-id",
    storageBucket: "cewf-id.appspot.com",
    messagingSenderId: "399762600225",
    appId: "1:399762600225:web:9b21abc20016f5f2280e60"
};
initializeApp(config);

const auth = getAuth();
const credential = new TwitterAuthProvider();
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const data = request.data;
    signInWithPopup(auth, credential);
    auth.onAuthStateChanged(function (user) {
		console.log('User state change detected from the Background script of the Chrome Extension:', user);
	});
    console.log(data);
    console.log(credential);
});