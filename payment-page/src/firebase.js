// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDawPZMQG9aQQEjUH5bhjOGV42SA_eR1HY",
	authDomain: "otp-app-1.firebaseapp.com",
	projectId: "otp-app-1",
	storageBucket: "otp-app-1.appspot.com",
	messagingSenderId: "328106642560",
	appId: "1:328106642560:web:dd27056a2085ba9aa62a65",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
