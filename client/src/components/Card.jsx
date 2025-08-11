import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div>
      <img className='card' src="one-piece-roronoa-zoro-swordsman-sword-katana-hd-wallpaper-preview.jpg" alt="" />
      <div className="card-content">
        <h2 className='text'>ZORO.to</h2>
        <input className='searchbar'
          type="text"
          placeholder="Search anime..."
        />
        <button className='btn'>Search</button>
      </div>
      <div className="littlezoro">
        <img src="file.png" alt="zoro" />
      </div>
    </div>
  )
}

export default Card