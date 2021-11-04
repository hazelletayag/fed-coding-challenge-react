import React from 'react'
import '../styles/footer.scss';
import logo from '../assets/images/logo-white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <img className="logo" src={logo} alt="Logo" />
          <p>Front-end developer test page – September 2021</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
