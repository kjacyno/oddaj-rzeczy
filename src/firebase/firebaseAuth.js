import {auth} from '/src/firebase/index.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

export async function createNewUser(setUser, email, password) {
    if (email.trim() && password.trim() !== '') {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser({...user, displayName: email});

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }
}

export async function logOut(setUser) {

    await signOut(auth).then(() => {
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
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage)
            console.log(errorCode);
            throw error;
        });
}