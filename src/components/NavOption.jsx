import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavOption = ({ to, Icon, label, navButtonsStyle, responsiveFont }) => {
  const navigate = useNavigate(); 
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 

  // Alterna a visibilidade do dropdown
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="group flex flex-col relative">
      <div className={`flex items-center gap-2 ${navButtonsStyle} cursor-pointer`} onClick={toggleDropdown}>
        <Icon />
        <p className={responsiveFont}>{label}</p>
      </div>

      <ul className={`z-10 bg-gray-100 w-full text-blue-500 border-solid border-l-2 pl-2 border-sky-500  ${isDropdownVisible ? 'block' : 'hidden'}`}>
        <li className='hover:bg-slate-300 hover:text-white cursor-pointer' onClick={() => {navigate('/'); toggleDropdown();}}>Texto 1</li>
        <li className='hover:bg-slate-300 hover:text-white cursor-pointer' onClick={() => {navigate('/'); toggleDropdown();}}>Texto 2</li>
        <li className='hover:bg-slate-300 hover:text-white cursor-pointer' onClick={() => {navigate('/'); toggleDropdown();}}>Texto 3</li>
      </ul>
    </div>
  );
};

export default NavOption;