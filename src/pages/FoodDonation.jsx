import React, { useState } from 'react'
import Layout from '../components/Layout'
import '../css/donation.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, doc, getFirestore } from 'firebase/firestore';
import { db } from '../initFirebase';
import { useNavigate } from 'react-router-dom';
const FoodDonation = () => {
  const navigate = useNavigate();
    const [quantity,setQuantity] = useState('1')
    const [foodType,setFoodType] = useState('Veg')
    const [packed,setPacked] = useState('packaged')
    const [foodAge,setFoodAge] = useState('2')
    const [address, setAddress] = useState('');
    const [foodName,setFoodName] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
    const [loading,setLoading] = useState(false)

    const handleSubmit = async()=>{
        try {
        setLoading(true)  
        const postCollectionRef = collection(db, "food-donation");
        await addDoc(postCollectionRef, {
          foodName:foodName,
          quantity: quantity,
          foodType: foodType,
          packed: packed,
          foodAge:foodAge,
          address:address,
          coordinates:coordinates,
          status:"pending",
          time: Timestamp.now(),
        });
        setLoading(false)
        toast.success('Food Donation Submited!')
        } catch (error) {
            console.log(error)
            toast.warn('Something Went Wrong!!')
            setLoading(false)
        }
    }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGeocode = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates({ lat, lon });
      } else {
        toast.warn('Address not Found')
      }
    } catch (error) {
      toast.error('Something Went Wrong!!')
    }
  };
  return (
    <div>
      <Layout title={'Food Donation'}>
      <div className="donation-container">
        <button className='donation-button' onClick={()=>navigate('/donation')} style={{color:'#FFFFFF'}}>For Money Donation</button>
     <div className="donation-upper-box">
        <div className="donation-inner-box">
            <div className="img-details">
                <h1>We can Save the Future</h1>
            </div>
            <div className="donation-info">
                <h3>Food Donation</h3>

                <div className="donation-type-input">
                    <label>Food Name</label>
                    <input type="text" 
                    value={foodName} 
                    onChange={(e)=>setFoodName(e.target.value)}/>
                </div>
                <div className="donation-type-input">
                    <label>Quantity of food (in Persons)</label>
                    <input type="number" 
                    value={quantity} 
                    onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
                <div className="donation-type-input">
                    <label>Type Of Food</label>
                    <select value={foodType} onChange={(e)=>setFoodType(e.target.value)}>
                        <option value="Veg">Veg</option>
                        <option value="Non Veg">Non Veg</option>
                    </select>
                </div>
                <div className="donation-type-input">
                    <label>packaged/non packaged</label>
                    <select value={packed} onChange={(e)=>setPacked(e.target.value)}>
                        <option value="packaged">Packeged</option>
                        <option value="non packeged">Non Packeged</option>
                    </select>
                </div>
                <div className="donation-type-input">
                    <label>Age Of Food (in hours)</label>
                    <select value={foodAge} onChange={(e)=>setFoodAge(e.target.value)}>
                        <option value="2">2 hours</option>
                        <option value="4">4 hours</option>
                        <option value="6">6 hours</option>
                        <option value="8">8 hours</option>
                        <option value="10">10 hours</option>
                        <option value="12">12 hours</option>
                    </select>
                </div>
                <div className="donation-type-input">
                    <label>Address</label>
                    <input type="text" value={address} onChange={handleAddressChange} />
                    <button onClick={handleGeocode}>Geocode</button>
                    {coordinates.lat && coordinates.lon && (
                        <p>
                        Latitude: {coordinates.lat}, Longitude: {coordinates.lon}
                        </p>
                    )}
                </div>
                <div className="button-container">
                    <button className='donation-button'>Cancel</button>
                    <button className='donation-button' style={{backgroundColor:'#9acd32',color:'#ffffff'}} onClick={handleSubmit}>{loading?"loading...":"Submit"}</button>
                </div>
            </div>
        </div>
     </div>

    </div>
      </Layout>
    </div>
  )
}

export default FoodDonation
