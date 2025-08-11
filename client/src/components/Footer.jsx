import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <span>&copy; 2025 ZoroTo. All rights reserved.</span>
        <Link to='/privacypolicy'>Privacy Policy</Link>
        <Link to='/termsofservices'>Terms of Service</Link>
        <Link to='/contact'>Contact</Link>
    </footer>
    </div>
  )
}

export default Footer
