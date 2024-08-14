import React from 'react'
import '../css/profile.css'
import '../css/donation.css'
import { useAuth } from '../Routes/AuthContext';
const ProfileLayout = ({children}) => {
  const { currentUser, login, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('Logout failed', error);
    }
  };
  return (
    <div>
      <div className="profile-container">
        <div className="profile-sidebar">
            <ul className='profile-list-container'>
                <li><a href="/profile">My Profile</a></li>
                <li><a href="/profile/donation-history">Donation History</a></li>
                <li><a href="/my-helps">My Helps</a></li>
                <li onClick={handleLogout} style={{cursor:'pointer'}}><a>Logout</a></li>
            </ul>
        </div>
        <div className="main-bar">
            {children}
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
