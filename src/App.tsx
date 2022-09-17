import Content from "./components/Content"
import MainHeader from "./components/MainHeader"
import { AuthContext } from "./contexts/AuthContexts"
import { Layout } from "./styles/Layout"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// import { useState } from "react";

// Hooks

// const [userProfile, setUserProfile] = useState()
// const [userName, setUserName] = useState()


// Config Firebase

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
};

/** Initialize Firebase */
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name: any = result.user.displayName;
    const email: any = result.user.email;
    const profilePic: any = result.user.photoURL;

  }).catch((error) => {
    console.log(error);
  })
};

function App() {

  return (
    <Layout>
      <h1>{import.meta.env.VITE_SOME_KEY}</h1>
      <AuthContext.Provider value={{}}>
        <MainHeader />
        <Content />
      </AuthContext.Provider>
    </Layout>
  )
}

export default App
