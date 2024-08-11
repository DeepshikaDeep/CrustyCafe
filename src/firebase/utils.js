import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "./config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth services
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Function to log in with Google
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
