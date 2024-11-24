import { createContext, useState } from "react";
import route from "next/router";
import firebase from "../../firebase/config";
import User from "@/model/User";

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();

  return {
    uid: userFirebase.uid,
    nome: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0].providerId,
    imageUrl: userFirebase.photoURL,
  };
}

export function AuthProvider(props) {
  const [user, setUser] = useState<User>(null);
  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (resp.user?.email) {
      const user = await normalUser(resp.user);
      setUser(user);
      route.push("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
