import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp(process.env.firebaseConfig);

const fb = {
    app : firebaseApp,
    db: getFirestore(firebaseApp)
}

export default fb