import React from 'react';
import { Link } from 'react-router-dom';

const NavOption = ({ to, Icon, label, navButtonsStyle, responsiveFont }) => {
  return (
    <Link to={to} className="flex">
      
      <ul className={`${navButtonsStyle}`}>
        <Icon />
        
        <li>
          <p className={`${responsiveFont}`}>{label}</p>
        </li>
        
      </ul>

    </Link>
  );
};

export default NavOption;
