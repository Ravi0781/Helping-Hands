import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Routes/AuthContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../initFirebase';
import { toast } from 'react-toastify';
const Donation = () => {
    const {currentUser} = useAuth();
    const [selectedOption, setSelectedOption] = useState('');
    const [frequency, setFrequency] = useState('monthly');
    const [donationtype,setDonationType] = useState('Food Services')
    const [customAmount,setCustomeAmount] = useState(0)
    const navigate = useNavigate();
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handlePayment = async()=>{
        try {
        const subcollectionRef = collection(db, `users/${currentUser.uid}/donation`);
        await addDoc(subcollectionRef, {
            selectAmount:selectedOption,
            frequency:frequency,
            donationType:donationtype,
            customAmount:customAmount,
            time:Timestamp.now(),
        });
        const postCollectionRef = collection(db, "donation");
        await addDoc(postCollectionRef, {
            selectAmount:selectedOption,
            frequency:frequency,
            donationType:donationtype,
            customAmount:customAmount,
            time:Timestamp.now(),
            uid:currentUser?.uid
        })
        toast.success('Donation Add Success!!')
    } catch (error) {
            console.log(error)
            toast.error('Something went Wrong!')
    }
    }

  return (
    <>
    <Layout title={'Donation'}>
    <div className="donation-container">
    <button className='donation-button' onClick={()=>navigate('/food-donation')} style={{color:'#FFFFFF'}}>For Food Donation</button>
     <div className="donation-upper-box">
        <div className="donation-inner-box">
            <div className="img-details">
                <h1>We can Save the Future</h1>
            </div>
            <div className="donation-info">
                <h3>Welcome to heavenchild donation, please fill out the form below. Hopefully it is blessed.</h3>
                <div className="donation-type-input">
                    <label>Choose a donation type</label>
                    <select  value={donationtype} onChange={(e)=>setDonationType(e.target.value)}>
                        <option value="Food Services">Food Services</option>
                        <option value="Food Services">Food Services</option>
                        <option value="Food Services">Food Services</option>
                        <option value="Food Services">Food Services</option>
                    </select>
                </div>
                <div className="donation-type-input">
                    <label>Choose a donation amount</label>
                    <label>
                    <input 
                    type="radio" 
                    value="100" 
                    checked={selectedOption === '100'} 
                    onChange={handleChange} 
                    />
                    100 /-
                </label>
                <label>
                    <input 
                    type="radio" 
                    value="500" 
                    checked={selectedOption === '500'} 
                    onChange={handleChange} 
                    />
                    500 /-
                </label>
                <label>
                    <input 
                    type="radio" 
                    value="1000" 
                    checked={selectedOption === '1000'} 
                    onChange={handleChange} 
                    />
                    1000 /-
                </label>
                </div>
                <div className="donation-type-input">
                    <p>Enter a custom donation amount</p>
                    <input type="number" placeholder='Enter Amount' 
                    value={customAmount} 
                    onChange={(e)=>setCustomeAmount(e.target.value)}/>
                </div>
                <div className="donation-type-input">
                    <label>Choose a donation frequency</label>
                    <select  value={frequency} onChange={(e)=>setFrequency(e.target.value)}>
                        <option value="monthly">Monthly</option>
                        <option value="one time">One time</option>
                    </select>
                </div>
                <p>Auctor ut gravida senectus sed imperdiet id. Enim mauris morbi suscipit tellus aliquam commodo iaculis tortor. Faucibus elit, convallis massa sed. </p>
                <div className="button-container">
                    <button className='donation-button'>Cancel</button>
                    <button className='donation-button' style={{backgroundColor:'#9acd32',color:'#ffffff'}} onClick={handlePayment}>Go to checkout</button>
                </div>
            </div>
        </div>
     </div>
    </div>
    </Layout>
     
    </>
  )
}

export default Donation
