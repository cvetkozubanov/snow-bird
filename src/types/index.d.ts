export {};

declare global {
  // eslint-disable-next-line no-shadow
  interface Window {
    // this should be the same as application name
    __REACT_BOILERPLATE_APP: {
      FIREBASE_API_KEY: string;
      FIREBASE_AUTH_DOMAIN: string;
      FIREBASE_PROJECT_ID: string;
      FIREBASE_STORAGE_BUCKET: string;
      FIREBASE_MESSAGING_SENDER_ID: string;
      FIREBASE_APP_ID: string;
    };
  }
}
