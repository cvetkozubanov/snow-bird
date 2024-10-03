import { FirebaseOptions } from 'firebase/app';

export const firebaseOptions: FirebaseOptions = {
  apiKey: window.__REACT_BOILERPLATE_APP.FIREBASE_API_KEY,
  authDomain: window.__REACT_BOILERPLATE_APP.FIREBASE_AUTH_DOMAIN,
  projectId: window.__REACT_BOILERPLATE_APP.FIREBASE_PROJECT_ID,
  storageBucket: window.__REACT_BOILERPLATE_APP.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window.__REACT_BOILERPLATE_APP.FIREBASE_MESSAGING_SENDER_ID,
  appId: window.__REACT_BOILERPLATE_APP.FIREBASE_APP_ID
};
