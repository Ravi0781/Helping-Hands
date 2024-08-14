import React from 'react'
import Layout from '../components/Layout'
import ProfileLayout from '../components/ProfileLayout'
import Loader from '../components/Loader'

const DonetionHistory = () => {
  return (
    <div>
      <Layout>
        <ProfileLayout>
            <Loader/>
        </ProfileLayout>
      </Layout>
    </div>
  )
}

export default DonetionHistory
