import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, 
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({
					uid: uid,
					email: email,
					displayName: displayName,
					photoURL: photoURL
				}));
				navigate('/browse');
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate('/');
			}
		});
		return () => unsubscribe();
	}, []);

	const handleSigOut = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	}
	const handleGptSearchClick = () => {
		// Toggle Gpt search
		dispatch(toggleGptSearch());
	}
	return (
		<div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
			<img className='w-48' src='img/Netflix_Logo_PMS.png' alt='logo' />
			{user && (
				<div className='flex'>
					<button className='font-bold text-xl text-white' onClick={handleGptSearchClick}>GPT Search</button>
					<img className='bg-white opacity-80 m-6 w-8 h-8' src={user.photoURL ? user.photoURL : 'https://static.thenounproject.com/png/3668369-200.png'} alt='user' />
					<button className='text-white font-bold text-xl' onClick={handleSigOut}>Sign out</button>
				</div>
			)}
		</div>
	)
}

export default Header