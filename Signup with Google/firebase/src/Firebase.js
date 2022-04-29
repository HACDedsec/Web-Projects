
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC9w9Z4kGbJozyf9VRGN0Ze35RkrETMe68",
  authDomain: "test-api-1d69d.firebaseapp.com",
  projectId: "test-api-1d69d",
  storageBucket: "test-api-1d69d.appspot.com",
  messagingSenderId: "830536469270",
  appId: "1:830536469270:web:efb6de3f5eb8bffbf81e37"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()



export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result)=> {
        

        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);



    })
    .catch((error)=>{
        console.log(error);

    })

}