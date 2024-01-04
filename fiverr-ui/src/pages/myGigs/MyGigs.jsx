import React from 'react'
import './MyGigs.scss'
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">Add New Gig</Link>
        </div>
        <table>
          
        </table>
      </div>
    </div>
  )
}

export default MyGigs