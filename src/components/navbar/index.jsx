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

const Navbar = () => {
  const navButtonsStyle = "flex items-center gap-1 hover:text-blue-600 duration-200 hover:border-b-2 hover:border-blue-600 hover:font-bold cursor-pointer whitespace-nowrap";
  const rightOptions = "w-7 h-6 cursor-pointer";
  const responsiveFont = "md:py-5";

  //TODO: Criar componente de rota
  return (
    <nav className="flex justify-between items-center bg-gray-100 w-full p-4">
      <div className="flex gap-6">
        
        <NavOption to="/" className="flex items-center gap-2"  Icon={DiJsBadge} label="Empresa" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
        
        <div className="visible md:invisible md:hidden  flex gap-6">
          <NavOption to="/dashboard" Icon={RxDashboard} label="Dashboard" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/members" Icon={CgProfile} label="Members" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/customers" Icon={RiCustomerService2Fill} label="Customers" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/billings" Icon={RiBillLine} label="Billings" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/plans" Icon={RiMoneyDollarCircleLine} label="Plans" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />
          <NavOption to="/doctype" Icon={IoIosDocument} label="DocType" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont} />        
          <NavOption to="/properties" Icon={LuTableProperties} label="properties" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont}/>
          <NavOption to="/integrations" Icon={FaCodeBranch} label="integrations" navButtonsStyle={navButtonsStyle} responsiveFont={responsiveFont}/>
        </div>

      </div>

      <div className="flex items-center pr-8 gap-3">
        <CiSearch className={`${rightOptions}`} />
        <CiSettings className={`${rightOptions}`} />
        <DiJsBadge className="h-6 w-6 text-blue-600 rounded-full" />
      </div>

    </nav>
  );
};

export default Navbar;
