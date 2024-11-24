import { createContext, useEffect, useState } from "react";
import route from "next/router";
import Cookies from "js-cookie";
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

function manageCookie(loggedIn: boolean) {
  if (loggedIn) {
    Cookies.set("admin-template-auth", loggedIn, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props) {
  const [load, setLoad] = useState(true);

  const [user, setUser] = useState<User>(null);

  async function sessionConfig(userFirebase) {
    if (userFirebase?.email) {
      const user = await normalUser(userFirebase);
      setUser(user);
      manageCookie(true);
      setLoad(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoad(false);
      return false;
    }
  }

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    sessionConfig(resp.user);
    route.push("/");
  }

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(sessionConfig);
    return () => cancel();
  }, []);

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
