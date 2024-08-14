import React from 'react'
import Layout from '../components/Layout'
import '../css/home.css'
import hungry from '../assets/hungry.png';
import children from '../assets/children.png';
import women from '../assets/women.png';
import map from '../assets/map.png';
const Home = () => {
  return (
    <div>
      <Layout title={'Home'}>
        <div className="home-double-cointainer">
            <div className="upper-hero-section">
                <h1>Connecting Surplus Food <br /> to Those in Need</h1>
                <p className='p-h-short-para'>"Join us in the fight against hunger. Make a difference today."</p>
                <p className='p-h-long-para'>In the 2023 Global Hunger Index, India ranks 111th out of the 125 countries with sufficient data to calculate 2023 GHI scores. With a score of 28.7 in the 2023 Global Hunger Index, India has a level of hunger that is serious</p>
                <button className='btn-h'>Help now!!</button>
            </div>

            {/* second hero section */}
            <div className="home-send-hero-section">
              <h1>The Problem</h1>
              <p>The challenge is not a lack of food — it is making food consistently available to everyone who needs it.</p>
              <div className="second-hero-grid-connection">
                <div className='hero-grid-details'>
                  <img src={hungry} alt="hungry" />
                  <p>HUNGER IS THE CAUSE OF 45% OF ALL CHILDREN’S DEATHS</p>
                </div>
                <div className='hero-grid-details'>
                  <img src={children} alt="children" />
                  <p>MORE THAN 99 MILLION CHILDREN UNDER AGE FIVE ARE STILL UNDERNOURISHED AND UNDERWEIGHT</p>
                </div>
                <div className='hero-grid-details'>
                  <img src={women} alt="women" />
                  <p>ALMOST ¼ OF INDIA IS UNDERNOURISHED</p>
                </div>
              </div>
            </div>
        </div>

        {/* map container box */}
        <div className="map-container">
          <img src={map} alt="map" />
          <h1>According to the Surveys Conducted By the Government 1/8 of Asia is Hungry.</h1>
        </div>
        <div className="last-section-home">
          <h1>Who We Are?</h1>
          <h3>The Helping Hands is a volunteer based, zero-funds organization that works to get surplus food from restaurants and the community to serve less fortunate people.</h3>
        </div>
      </Layout>
    </div>
  )
}

export default Home
