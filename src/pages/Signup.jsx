import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/donation.css'
import { toast } from 'react-toastify';
import { auth, db } from '../initFirebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
const Signup = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [userType,setUserType] = useState('donator')

    const handleSignup=async(e)=>{
      e.preventDefault();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log({user,email,password,userType})
        const firestore = getFirestore();
        const userDocRef = doc(firestore, `users/${user.uid}`);
        await setDoc(userDocRef, {
          email: email,
          userType: userType,
          name: name
        });
        toast.success('Signup Successfully!!')
        navigate('/login')
      } catch (error) {
        console.log(error)
        toast.error('Something went Wrong!!')
      }
  }
  return (
    <>
    <div className="login-body">
      <div className="login-container">
        <h2>Signup To Helping Hands</h2>
        <div className="input-container">
            <label>Name</label>
            <input type="name" className='input' value={name} 
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="input-container">
            <label>Email</label>
            <input type="email" className='input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="input-container">
            <label>Type</label>
            <select value={userType} onChange={(e)=>setUserType(e.target.value)}>
                        <option value="donator">donator</option>
                        <option value="volunteer">volunteer</option>
                        <option value="dependent">dependent</option>
                    </select>
        </div>
        <div className="input-container">
            <label>Password</label>
            <input type="password" className='input' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='btn' onClick={handleSignup}>Signup</button>
        <p className='bottom-auth-text'>if you already signup please <a href="/login">click here</a></p>
      </div>
      </div>
    </>
  )
}

export default Signup
