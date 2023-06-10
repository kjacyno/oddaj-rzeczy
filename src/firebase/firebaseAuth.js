import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import {auth} from '/src/firebase/index.js';

export async function  createNewUser(setUser, user, email, password){
  if (email.trim() && password.trim() !== ''){
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

    });
  }
}

export function logOut(setUser) {
  signOut(auth).then(() => {
    setUser('')
    localStorage.removeItem('user');

  }).catch((error) => {
    console.log(error);
  });
}

export async function signIn(email, password, userLogin) {

  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    userLogin(user);
    localStorage.setItem('user', JSON.stringify(user));
    console.log('signed in', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage)
    console.log(errorCode);
   throw error;
  });
}