import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavOption = ({ to, Icon, label, navButtonsStyle, responsiveFont }) => {
  const navigate = useNavigate(); // Hook do React Router para navegação programática

  return (
    <div className="group flex flex-col relative">
      <Link to={to} className={`flex items-center gap-2 ${navButtonsStyle}`}>
        <Icon />
        <p className={responsiveFont}>{label}</p>
      </Link>

      {/* Dropdown se torna visível ao passar o mouse */}
      <ul className={`z-10 bg-gray-100 w-full text-blue-500 hidden group-hover:block block`}>
        {/* Todos os itens li redirecionam para a página inicial ao clicar */}
        <li className='hover:bg-slate-300 hover:text-white cursor-pointer' onClick={() => navigate('/')}>Texto 1</li>
        <li className='hover:bg-slate-300 hover:text-white cursor-pointer' onClick={() => navigate('/')}>Texto 2</li>
        <li className='hover:bg-slate-300 hover:text-white cursor-pointer' onClick={() => navigate('/')}>Texto 3</li>
      </ul>
    </div>
  );
};

export default NavOption;
