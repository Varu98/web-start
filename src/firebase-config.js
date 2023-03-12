/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDspVzr-sfL79Yra2x1vYJMrpp2EWqask8",
  authDomain: "friendlychat-aab2f.firebaseapp.com",
  projectId: "friendlychat-aab2f",
  storageBucket: "friendlychat-aab2f.appspot.com",
  messagingSenderId: "1096037838671",
  appId: "1:1096037838671:web:efb279d0964c85aaeedf3a",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
