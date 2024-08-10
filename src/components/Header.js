import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faTasks} style={iconStyle} />
        <h1 style={titleStyle}>Taskify</h1>
      </div>
      <div className="info">
        <p>by Ali Sotoudeh</p>
        <p>
          <a 
            href="https://alisutu.com" 
            className="website-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            alisutu.com
          </a>
        </p>
      </div>
    </header>
  );
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '24px',
};

const titleStyle = {
  margin: 0,
};

export default Header;
