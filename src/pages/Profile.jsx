import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import ProfileLayout from '../components/ProfileLayout'
import { useAuth } from '../Routes/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../initFirebase'

const Profile = () => {
  const {currentUser} = useAuth();
    const [user,setUser] = useState();
    const [name,setName] = useState("")
    const [phone,setPhoneno] = useState('+90 889900250')
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState('mohali chandigarh phase - 3')
    const fetchUserdata = async(userid)=>{
      const docRef = doc(db, 'users', userid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUser(docSnap.data());
          }  
          setName(user?.name)
          setEmail(user?.email)
          console.log(user)
    }
    useEffect(()=>{
      fetchUserdata(currentUser?.uid)
    },[currentUser?.uid])
  return (
    <div>
      <Layout title={'Profile'}>
        <ProfileLayout>
            <div className="input-container">
                <label>Name</label>
                <input type="text" value={name} className='input'/>
            </div>
            <div className="input-container">
                <label>Phone no</label>
                <input type="text" value={phone} className='input'/>
            </div>
            <div className="input-container">
                <label>Email</label>
                <input type="text" value={email} className='input'/>
            </div>
            <div className="input-container">
                <label>Address</label>
                <input type="text" value={address} className='input'/>
            </div>
            <div className="button-container">
                    <button className='donation-button' style={{color:'#ffffff'}}>Cancel</button>
                    <button className='donation-button' style={{backgroundColor:'#9acd32',color:'#ffffff'}}>Update</button>
                </div>
        </ProfileLayout>
      </Layout>
    </div>
  )
}

export default Profile
