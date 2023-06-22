import {db,auth} from "./index.js";
import { doc, setDoc, collection } from "firebase/firestore";


export async function saveData (data){
    const user = auth.currentUser;
    console.log(user.uid);
    const docRef = doc(collection(db, 'users', user.uid,'donations'));
    const userRef = doc(db, 'users', user.uid)
    const userData = {email: user.email}
    await setDoc(docRef, data)
        .then(() => {
            console.log("Document has been added successfully");
        })
        .catch(error => {
            console.log(error);
        })
    await setDoc(userRef,userData)
        .then(() => {
            console.log("User e-mail has been added successfully");
        })
        .catch(error => {
            console.log(error);
        })
}