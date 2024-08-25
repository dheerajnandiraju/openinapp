import { createUserWithEmailAndPassword, OAuthProvider, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import {auth} from "./firebase";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const doCreateUserWithEmailAndPassword= async(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInWithEmailAndPassword = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

export const doSignInWithGoogle= async()=>{
    const provider = new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
    return result;
};

export const doSignInWithApple=async()=>{
    const provider = new OAuthProvider("apple.com");
    const result=await signInWithPopup(auth,provider);
    return result;
}

export const doSignOut=()=>{
    return auth.signOut();
}

