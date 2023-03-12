import { getMessaging, getToken } from "firebase/messaging";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BD1xBD9tC0y44tMy8a8J7b7Q9TJNvgNHWw-3cGWeMVnBCLMorQXkJgT2IxFEp-IbtOeOGpPYWr8Sy1GdVy05_-A",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log("Got FCM device token:", currentToken);
      const tokenRef = doc(getFirestore(), "fcmTokens", currentToken);
      setDoc(tokenRef, { uid: getAuth().currentUser.uid });

      onMessage(getMessaging(), (message) => {
        console.log(
          "New foreground notification from Firebase Messaging!",
          message.notification
        );
      });
    } else {
      console.log("Requesting notifications permission...");
      const permission = Notification.requestPermission();

      if (permission === "granted") {
        console.log("Notification permission granted.");
        // Notification permission granted.
        // saveMessagingDeviceToken();
      } else {
        console.log("Unable to get permission to notify.");
      }
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
