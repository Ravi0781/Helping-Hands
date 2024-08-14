import React, { useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../initFirebase';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useAuth } from '../Routes/AuthContext';

const Login = () => {
  const { currentUser, login, logout } = useAuth();
    const navigate = useNavigate();
    const [user,setUser] = useState([]);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
          setLoading(true)
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          // await login(email, password);
          let user = userCredential.user;
          const docRef = doc(db, 'users', user?.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUser(docSnap.data());
            user = docSnap.data();
            setLoading(false)
          } else {
            console.log('No such document!');
            toast.warn('User Not Found')
          }
          toast.success('Login Successfully')
          if(user.userType=="donator"){
            navigate('/donation');
          }else if(user.userType=="dependent"){
            navigate('/volunteers')
          }else{
            navigate('/volunteers')
          }
        } catch (error) {
          console.log(error)
          toast.error('Something Went Wrong!')
          setLoading(false)
        }
    }
  return (
    <>
    <div className="login-body">
      <div className="login-container">
        <h2>Login To Helping Hands</h2>
        <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder='Enter Your email' className='input' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label>Password</label>
            <input type="password" placeholder='Enter Your Password' className='input'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='btn' onClick={handleLogin}>{loading?"loading..":"Login"}</button>
        <p className='bottom-auth-text'>if you not signup please <a href="/signup">click here</a></p>
      </div>
      </div>
    </>
  )
}

export default Login
