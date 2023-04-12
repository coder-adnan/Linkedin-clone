import React, { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  function register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        return auth.currentUser.updateProfile({
          displayName: name,
          photoURL: profilePic,
        });
      })
      .then(() => {
        // Add the user to the database
        return setDoc(doc(db, "users", auth.currentUser.uid), {
          name: name,
          email: email,
          photoUrl: profilePic,
        });
      })
      .then(() => {
        dispatch(
          login({
            email: email,
            uid: auth.currentUser.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  const loginToApp = async e => {
    e.preventDefault();
    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
