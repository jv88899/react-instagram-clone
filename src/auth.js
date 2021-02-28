import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import React from "react";

const provider = new firebase.auth.GoogleAuthProvider();

// Find these options in your Firebase console
firebase.initializeApp({
  apiKey: "AIzaSyA5uc5SQ-3YixFTuM8umGhz474LTInCpQ8",
  authDomain: "instagram-react-clone-206b7.firebaseapp.com",
  databaseURL: "https://instagram-react-clone-206b7.firebaseio.com",
  projectId: "instagram-react-clone-206b7",
  storageBucket: "instagram-react-clone-206b7.appspot.com",
  messagingSenderId: "710339080588",
  appId: "1:710339080588:web:5aefe2dc2924b6d180e6a9",
});

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = React.useState({ status: "loading" });

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ status: "in", user, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref(`metadata/${user.uid}/refreshTime`);

          metadataRef.on("value", async (data) => {
            if (!data.exists) return;
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            setAuthState({ status: "in", user, token });
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, []);

  async function signInWithGoogle() {
    await firebase.auth().signInWithPopup(provider);
  }

  async function signOut() {
    setAuthState({ status: "loading" });
    await firebase.auth().signOut();
    setAuthState({ status: "out" });
  }

  if (authState.status === "loading") {
    return null;
  } else {
    return (
      <AuthContext.Provider value={{ authState, signInWithGoogle, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
