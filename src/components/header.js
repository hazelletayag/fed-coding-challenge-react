import React from 'react';
import '../styles/header.scss';
import logo from '../assets/images/logo-white.svg';
import poly4 from '../assets/images/poly-4.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <div className="header-info">
            <div className="heading-wraooer">
              <h1>Mountains</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed euismod ex ut blandit condimentum.</p>
            </div>
            <div className="image-wrapper">
              <img src={poly4} alt="Mountain" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
