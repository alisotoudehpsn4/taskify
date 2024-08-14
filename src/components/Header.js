/**
 * Imports React for building the header component.
 */
import React from 'react';

/**
 * Imports FontAwesomeIcon and task-related icons for the header.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

/**
 * Defines the Header component.
 * Displays the logo with the Taskify title and author information.
 */
const Header = () => {
  /**
   * Renders the header section with a logo and my information.
   */
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

/**
 * Defines inline styles for the FontAwesome icon and the title.
 */
const iconStyle = {
  marginRight: '10px',
  fontSize: '24px',
};

const titleStyle = {
  margin: 0,
};

/**
 * Exports the Header component as the default export.
 */
export default Header;
