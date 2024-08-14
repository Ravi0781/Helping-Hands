import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../css/volunteers.css'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../initFirebase';
import Loader from '../components/Loader';
import Popup from "reactjs-popup";
import Map from '../components/Map';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Volunteers = () => {
  const navigate = useNavigate();
    const coordinates = [30.7334421, 76.7797143];
    const [foodData,setFoodData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [foodStatus,setFoodStatus] = useState('approved')
    const [loading1,setLoading1] = useState(false);
    const getFoodDonationData = async()=>{
        const postsCollectionRef = collection(db, "food-donation");
        const data = await getDocs(postsCollectionRef);
        const food = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        let pendingPickup = food.filter(item => item.status === "pending")
        setFoodData(pendingPickup);
        setLoading(false)
    }
    useEffect(()=>{
        getFoodDonationData();
    },[])
    const handleUpdateStatus = async(id)=>{
      try {
        setLoading1(true)
        const docRef = doc(db, 'food-donation', id);
          await updateDoc(docRef,{status:foodStatus})
          toast.success("Updated Successfully")
          getFoodDonationData();
          setLoading1(false)
      } catch (error) {
        setLoading1(false)
        console.log(error)
        toast.error("Something Went Wrong!!");
      }
    }
  return (
    <div>
      <Layout title={'volunteers'}>
        <div className="volunteers-container">
            <div className="volunteers-map">
            <h1>Map Data</h1>
                <Map coordinates={coordinates} />
            </div>
            <div className="volunteers-text-address">
                <h1>Food Donation Data</h1>
                {loading? <Loader/>:<div className="food-data-container">
                {foodData?.map((item,index)=>(
                    <div className="food-details" key={index}>
                        <p>Address: {item?.address}</p>
                        <p>{item?.foodAge} hours</p>
                        <p>{item?.foodType}</p>
                        <p>{item?.packed}</p>
                        <p>Quantity: {item?.quantity} persons</p>
                        <p>Time: {item.time.toDate().toDateString()}</p>
                        <Popup
                            trigger={
                              <button className='donation-button' style={{backgroundColor:'#9acd32',color:'#ffffff'}}>Update Status</button>
                            }
                            modal
                            nested
                          >
                            {(close) => (
                              <div className='pop-data'>
                                <h3>Update Food Pickup Status</h3>
                                <div className="donation-type-input">
                                    <label>Food Pickup Status</label>
                                    <select value={foodStatus} onChange={(e)=>setFoodStatus(e.target.value)} required>
                                        <option value="approved">Approve</option>
                                        <option value="rotten">Rotten</option>
                                        <option value="stale">Stale</option>
                                    </select>
                                </div>
                                <button className='donation-button' 
                                style={{backgroundColor:'#9acd32',color:'#ffffff'}} 
                                onClick={()=>handleUpdateStatus(item.id)}
                                >{loading1?"loading...":"Update Status"}</button>
                              </div>
                            )}
                          </Popup>
                        
                    </div>
                ))}
                </div>}
                
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Volunteers
