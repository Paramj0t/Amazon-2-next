// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD8WFGIJSpuOFmo7YOxXHCfMJJSHcBIxJk",
	authDomain: "amzn-2-8bcaa.firebaseapp.com",
	projectId: "amzn-2-8bcaa",
	storageBucket: "amzn-2-8bcaa.appspot.com",
	messagingSenderId: "23058047392",
	appId: "1:23058047392:web:e407ba44a28ee6c23984c5",
	measurementId: "G-0M3S9VC70S",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export default db;
