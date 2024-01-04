import React from 'react'
import'./Message.scss'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> : John Doe
        </span>
        <div className="messages"></div>
        <div className="write"></div>
      </div>
    </div>
  )
}

export default Message