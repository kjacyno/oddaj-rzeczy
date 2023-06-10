import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import {auth} from '/src/firebase/index.js';

export async function  createNewUser(data, setUser, user, email, password){
  if (email.trim() && password.trim() !== ''){
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, data);
      setUser(user);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
    setUser({...user, displayName: login})
  }
}

export function logOut(setUser) {
  signOut(auth).then(() => {
    setUser('');
  }).catch((error) => {
    console.log(error);
  });
}

export async function signIn(email, password, setUser) {

  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setUser(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  });
}