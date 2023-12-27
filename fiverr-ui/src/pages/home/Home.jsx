import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at your price point. No hourly rates.
              Just project based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
