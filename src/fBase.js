import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
// 	appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
	apiKey: 'AIzaSyAdbRpxY2JBzM8N3eT0VPo1kJDgeAytBmY',
	authDomain: 'nwitter-56554.firebaseapp.com',
	projectId: 'nwitter-56554',
	storageBucket: 'nwitter-56554.appspot.com',
	messagingSenderId: '161018011334',
	appId: '1:161018011334:web:5ff05928cde17c087f01c7',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
