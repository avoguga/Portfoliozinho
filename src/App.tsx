import Content from "./components/Content";
import MainHeader from "./components/MainHeader";
import { AuthContext } from "./contexts/AuthContexts";
import { Layout } from "./styles/Layout";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

// Types - Interfaces

interface IUser {
  name: string;
}

// Config Firebase

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

/** Initialize Firebase */
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

function App() {

  // Hooks
  const [userProfile, setUserProfile] = useState<IUser>();
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [isUserLogIn, setIsUserLogIn] = useState(false);


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name: any = result.user.displayName;
        const email: any = result.user.email;
        const profilePic: any = result.user.photoURL;
        
        setUserName(name);
        setUserEmail(email);
        setUserProfile(profilePic);
        setIsUserLogIn(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <AuthContext.Provider value={{ userName, userProfile, signInWithGoogle, isUserLogIn }}>
        <MainHeader />
        <Content />
      </AuthContext.Provider>
    </Layout>
  );
}

export default App;
