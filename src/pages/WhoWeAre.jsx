import React from 'react'
import Layout from '../components/Layout'
import '../css/home.css'
import howcanhelp from '../assets/howcanhelp.png';
const WhoWeAre = () => {
  return (
    <>
      <Layout title={'Who We Are'} >
      <div className="home-double-cointainer">
            <div className="upper-hero-section">
                <h1>Connecting Surplus Food <br /> to Those in Need</h1>
                <p className='p-h-short-para'>"Join us in the fight against hunger. Make a difference today."</p>
                <p className='p-h-long-para'>In the 2023 Global Hunger Index, India ranks 111th out of the 125 countries with sufficient data to calculate 2023 GHI scores. With a score of 28.7 in the 2023 Global Hunger Index, India has a level of hunger that is serious</p>
                <button className='btn-h'>Help now!!</button>
            </div>
        </div>

        <div className="last-section-home">
          <h1>Who We Are?</h1>
          <h3>The Helping Hands is a volunteer based, zero-funds organization that works to get surplus food from restaurants and the community to serve less fortunate people. <br /><br /><br />

Our local chapters are run by friends and colleagues, who hope to create a difference in their own unique way. For example, restaurants in the neighbourhood Green Park, will contribute to the homeless of the locality, through volunteers who live in Green Park. Our “Robins” are largely students and young working professionals – everyone does this in their free time. The lesser fortunate sections of society we serve include homeless families, orphanages, patients from public hospitals, and old age homes.</h3>
        </div>
        <div className="last-section-home">
          <h1>Our Vision!</h1>
          <h3>Simple really, beat global hunger and bring out the best of humanity using food as a medium. <br /><br />
The idea is to create self-sustained chapters across the world who will look after their local community. And in the process, inspire people around us to give back to those who need it most.</h3>
        </div>
        <div className="last-section-home">
          <h1>How You Can Help!</h1>
          <img src={howcanhelp} alt="How Can Help" />
        </div>
      </Layout>
    </>
  )
}

export default WhoWeAre
