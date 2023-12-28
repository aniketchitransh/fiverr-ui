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
            <h1>A whole world of freelance talent at <br />your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at your price point. No hourly rates.
              Just project based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at your price point. No hourly rates.
              Just project based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at your price point. No hourly rates.
              Just project based pricing.
            </p>
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
      <div className="features dark">
        <div className="container">
          <div className="item">
            <div className="logo">
              <span className='text'>fiverr</span>
              <span className='dot'>.</span>
              <span className='st'>Bussiness Solutions</span>
            </div>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven bussiness experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven bussiness experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven bussiness experience
            </div>
            <button>Learn More</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
