import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider, signInWithCredential, signInWithPopup } from "firebase/auth";

var config = {
    apiKey: "AIzaSyCoR1FGtRhfHG_IeYvZKgYJdRhxfEqiOdc",
    authDomain: "cewf-id.firebaseapp.com",
    projectId: "cewf-id",
    storageBucket: "cewf-id.appspot.com",
    messagingSenderId: "399762600225",
    appId: "1:399762600225:web:9b21abc20016f5f2280e60"
};

try {
    initializeApp(config);

    const auth = getAuth();
    const credential = new TwitterAuthProvider();

    function initApp() {
        auth.onAuthStateChanged(function (user) {
            console.log('User state change detected from the Background script of the Chrome Extension:', user);
        });
    }

    chrome.action.onClicked.addListener(function () {
        signInWithPopup(auth, credential);
        console.log(credential);
        initApp();
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { data: JSON.stringify(credential) }, function (res) { });
        });
    });
} catch (error) {
    console.log(error)
}

