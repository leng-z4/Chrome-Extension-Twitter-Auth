import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    /* your config */ 
};
initializeApp(firebaseConfig);
const provider = new TwitterAuthProvider();

const auth = getAuth();
auth.languageCode = "ja";

const signin_button = document.getElementById('signin-button');
const signout_button = document.getElementById('signout-button');
const user_data_log = document.getElementById('user_data');

function SignIn() {
    startAuth();
    signin_button.style.display = "none";
    signout_button.style.display = "block";
}

function SiginOut() {
    if (auth.currentUser) {
        auth.signOut();
        signin_button.style.display = "block";
        signout_button.style.display = "none";
        user_data.textContent = ''
    }
}

function startAuth() {
    signInWithPopup(auth, provider)
    .then(userCredential => {
        console.log(userCredential.user);
    }).catch(error => {
        console.log(error);
    });
}

auth.onAuthStateChanged(async function (user) {
    if (user) {
        signin_button.style.display = "none";
        signout_button.style.display = "block";
        user_data_log.textContent = JSON.stringify(user);
    } else {
        signin_button.style.display = "block";
        signout_button.style.display = "none";
        user_data.textContent = '';
    }
});
signin_button.addEventListener('click', SignIn, false);
signout_button.addEventListener('click', SiginOut);
