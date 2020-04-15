import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadDB() {
    try {
        let config = {
            apiKey: 'AIzaSyBsLoYT0ySgQglCSkxs7-E7j99JdyY8YEM',
            authDomain: 'zodiacs-6c83e.firebaseapp.com',
            databaseURL: 'https://zodiacs-6c83e.firebaseio.com',
            projectId: 'zodiacs-6c83e',
            storageBucket: 'zodiacs-6c83e.appspot.com',
            messagingSenderId: '183473739520',
            appId: '1:183473739520:web:47f8f66a7b44204617c5e5',
            measurementId: "G-3SQS36E57Z"
        };
        firebase.initializeApp(config);
    } catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
    }

    return firebase;
}
