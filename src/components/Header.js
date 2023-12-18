import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { LOGO_IMG, SUPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const isGptShow = useSelector(store => store.gpt.showGptSearch);

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
	const handleLangChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	}
	return (
		<div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
			<img className='w-48' src={LOGO_IMG} alt='logo' />
			{user && (
				<div className='flex p-2'>
					{ isGptShow && 
						<select className='text-xl p-2 bg-gray-900 text-white bg-opacity-40' onChange={handleLangChange}>
							{
								SUPORTED_LANGUAGES.map((lang) => {
									return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
								})
							}

						</select>
					}
					<button className='text-xl text-white m-6' onClick={handleGptSearchClick}>{isGptShow ? 'Home' : 'GPT Search'}</button>
					<img className='bg-white opacity-80 m-6 w-8 h-8' src={user.photoURL ? user.photoURL : 'https://static.thenounproject.com/png/3668369-200.png'} alt='user' />
					<button className='text-white text-xl' onClick={handleSigOut}>Sign out</button>
				</div>
			)}
		</div>
	)
}

export default Header