import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkLogin } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password = useRef(null);
    const uname = useRef(null);

    const handleLogin = () => {
        const errorMsg = checkLogin(isSignInForm, uname.current?.value, email.current.value, password.current.value);
        setErrorMessage(errorMsg);

        if (errorMsg) {
            return null;
        }
        if (!isSignInForm) {
            //signup form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // console.log(user);
                    updateProfile(user, {
                        displayName: uname.current?.value, 
                        photoURL: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(error);
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                });
        } else {
            //signin form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(error);
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                });
        }
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMG} alt="bgimg" />
            </div>
            <form className="w-4/12 absolute p-12 bg-black my-24 left-0 right-0 mx-auto text-white rounded-lg bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
                <h1 className="font-bold text-2xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-100 text-black rounded-lg" ref={uname} />}
                <input type="text" placeholder="Email" className="p-2 my-4 w-full bg-gray-100 text-black rounded-lg" ref={email} />
                <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-100 text-black rounded-lg" ref={password} />
                <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleLogin}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className="py-4 cursor-pointer underline" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a user: Sign In Now'}</p>
            </form>
        </div>
    );
}

export default Login;