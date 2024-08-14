import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../css/dashboard.css';
import { SiGoogleanalytics } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../initFirebase';
import Loader from '../components/Loader';
const Dashboard = () => {
    const [foodDonation,setfoodDonation] = useState([]);
  const [peopleToFeed,setPeopleToFeed] = useState(0)
  const [newTsak,setNewTask] = useState(0);
  const [develiveries,setDeveliveries] = useState(0);
  const [loading,setLoading] = useState(true);
  const [ngos,setNgos] = useState([
    {name:"RobinHood Army",progress:"17.5",quantity:'4',date:'6 MAY 2024'},
    {name:"Annamitra Fdn.",progress:"17.5",quantity:'3',date:'3 MAY 2024'},
    {name:"Akshay Patra",progress:"17.5",quantity:'2',date:'6 MAY 2024'},
    {name:"VIT Trust",progress:"17.5",quantity:'1',date:'5 MAY 2024'},
    {name:"Restaurents and Shops",progress:"17.5",quantity:'4',date:'4 MAY 2024'},
])
    const getFoodDonationData = async()=>{
        const postsCollectionRef = collection(db, "food-donation");
        const data = await getDocs(postsCollectionRef);
        // const food = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setfoodDonation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false)
    }
    const calculatePeopeleToFeed = ()=>{
        let x = 0;
        for (let index = 0; index < foodDonation.length; index++) {
            let y = Number(foodDonation[index].quantity)
            x = x + y
        }
        setPeopleToFeed(x);
        const food = foodDonation.filter(item => item.status !== "pending")
        setDeveliveries(food.length)
        const food1 = foodDonation.filter(item => item.status === "pending")
        setNewTask(food1.length)
    }
    useEffect(()=>{
        getFoodDonationData();
    },[]);
    useEffect(()=>{
        if(foodDonation.length>0){
            calculatePeopeleToFeed();
        }
        
    },[foodDonation])
  return (
    <div>
      <Layout title={'Dashboard'}>
        <div className="dashboard-container">
            <div className="upperDashboard-conatiner">
                <div className="inner-uper-container">
                    <SiGoogleanalytics color='#ffffff' size={50}/>
                    <div className='data-container-upper'>
                        <p>Deliveries</p>
                        <h3>{develiveries}</h3>
                    </div>
                </div>
                <div className="inner-uper-container">
                    <IoFastFood color='#ffffff' size={50}/>
                    <div className='data-container-upper'>
                        <p>People To Feed</p>
                        <h3>{peopleToFeed}</h3>
                    </div>
                </div>
                <div className="inner-uper-container">
                    
                    <div className='data-container-upper'>
                        <p>Parteners</p>
                        <h3>{4}</h3>
                    </div>
                </div>
                <div className="inner-uper-container">
                    <MdAddTask color='green' size={50}/>
                    <div className='data-container-upper'>
                        <p>New Tasks</p>
                        <h3>{newTsak}</h3>
                    </div>
                </div>
            </div>
            <div className="table-container">
                <h1>Food Availability And Quality</h1>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading?<Loader/>:(<>
                        {foodDonation.map((item, index) => ( 
                        <tr key={index}>
                            <td>{item?.foodName}</td>
                            <td>{item?.status}</td>
                            <td>{item?.time.toDate().toDateString()}</td>
                            <td>{item?.quantity} persons</td>
                        </tr>
                            ))}</>)}
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <h1>NGO’s And Parteners</h1>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>PROGRESS</th>
                        <th>QUANTITY</th>
                        <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ngos.map((item, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" className='input-1'/>{item.name}</td>
                            <td>{item.progress}%</td>
                            <td>{item.quantity}</td>
                            <td>{item.date}</td>
                        </tr>
                         ))} 
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <h1>NGO’s And Parteners</h1>
                <table className='table'>
                    <thead>
                        <tr>
                        <th><input type="checkbox" className='input-1'/>TASK</th>
                        <th><BsThreeDots size={30} cursor='pointer'/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ngos.map((item, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" className='input-1'/>{item.name}</td>
                            <td><PiDotsSixVerticalBold size={30} color='#ffffff'/></td>
                        </tr>
                         ))} 
                    </tbody>
                </table>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Dashboard
