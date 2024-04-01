import { DiJsBadge } from "react-icons/di";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { LuTableProperties } from "react-icons/lu";
import { FaCodeBranch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import NavOption from "../NavOption";
import { useState } from 'react';



const Navbar = () => {
  const navButtonsStyle = "flex items-center gap-1 hover:text-blue-600 duration-200 hover:border-b-2 hover:border-blue-600 hover:font-bold cursor-pointer whitespace-nowrap lg:text-sm"; // Reduz o tamanho da fonte no breakpoint lg
  const responsiveFont = "py-5 custom-sm:text-md text-lg text-black"; 
  const rightOptions = "w-7 h-6 cursor-pointer";
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  
  //TODO: Criar componente de rota
  return (
    <nav className="flex justify-between items-center custom-resp2:items-start w-full p-4 flex-wrap custom-resp1:flex-col">
      <div className="flex md:flex gap-6 items-center custom-resp2:items-center justify-center custom-resp1:flex-col flex-row">
        
        <div className="text-blue-600 flex justify-center items-center">
          <DiJsBadge className="h-6 w-6 text-blue-600 rounded-md" />
          <h1>Empresa</h1>
          {/* <NavOption to="/" Icon={DiJsBadge} label="Empresa" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} /> */}
        </div>
        
        <button onClick={toggleMenuVisibility} className="hamburguer-btn custom-resp2:hidden flex flex-col justify-around w-10 h-8 mb-5 bg-transparent border-none cursor-pointer focus:outline-none">
          <span className="block w-8 h-1 bg-blue-600"></span>
          <span className="block w-8 h-1 bg-blue-600"></span>
          <span className="block w-8 h-1 bg-blue-600"></span>
        </button>


        <div className="visible flex gap-6 custom-resp1:hidden">
          <NavOption to="/dashboard" Icon={RxDashboard} label="Dashboard" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont}  />
          <NavOption to="/members" Icon={CgProfile} label="Members" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/customers" Icon={RiCustomerService2Fill} label="Customers" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/billings" Icon={RiBillLine} label="Billings" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/plans" Icon={RiMoneyDollarCircleLine} label="Plans" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/doctype" Icon={IoIosDocument} label="DocType" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />        
          <NavOption to="/properties" Icon={LuTableProperties} label="Properties" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/integrations" Icon={FaCodeBranch} label="Integrations" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
        </div>

        <div className={`hamburguer-menu--container flex flex-col w-full ${isMenuVisible ? '' : 'hidden'}`}>
          <div className="hamburguer-menu custom-resp2:hidden">
            <NavOption to="/dashboard" Icon={RxDashboard} label="Dashboard" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont}  />
            <NavOption to="/members" Icon={CgProfile} label="Members" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
            <NavOption to="/customers" Icon={RiCustomerService2Fill} label="Customers" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
            <NavOption to="/billings" Icon={RiBillLine} label="Billings" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
            <NavOption to="/plans" Icon={RiMoneyDollarCircleLine} label="Plans" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
            <NavOption to="/doctype" Icon={IoIosDocument} label="DocType" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />        
            <NavOption to="/properties" Icon={LuTableProperties} label="Properties" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
            <NavOption to="/integrations" Icon={FaCodeBranch} label="Integrations" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          </div>
        </div>

      </div>

      <div className="flex items-center gap-3 pt-4">
        <CiSearch className={`${rightOptions}`} />
        <CiSettings className={`${rightOptions}`} />
        <DiJsBadge className="h-6 w-6 text-blue-600 rounded-full" />
      </div>

    </nav>
  );
};

export default Navbar;
