import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSigOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-48' src='img/Netflix_Logo_PMS.png' alt='logo' />
      {user && <div className='flex'>
        <img className='m-6 w-8 h-8' src={user.photoURL ? user.photoURL : 'https://static.thenounproject.com/png/3668369-200.png'} alt='user' />
        <button className='text-red-700 font-bold text-xl' onClick={handleSigOut}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header