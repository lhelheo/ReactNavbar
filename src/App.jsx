import "./App.css";
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
import { Link } from 'react-router-dom';

// Reaproveitamento de Estrutura
import { Outlet} from 'react-router-dom';

// Navegando entre páginas
import Navbar from "./components/Navbar";

function App() {

  const navButtonsStyle = "flex items-center gap-1 hover:text-blue-600 duration-200 hover:border-b-2 hover:border-blue-600 hover:font-bold cursor-pointer whitespace-nowrap";
  const rightOptions = "w-7 h-6 cursor-pointer";
  const responsiveFont = "md:py-5";
  
  // Melhoria 1: Código copiado, como poderia reutilizar o atributo className="flex items-center"?
  return (
    <header>
      <nav className="">
        
        <div className="flex justify-between bg-gray-100">

          <div className="flex gap-6 p-4">

            <Link to="/">
            <ul className="flex items-center gap-2">
              <DiJsBadge className="w-9 h-9 text-blue-600 rounded-xl"/>
              <li><p className={`${responsiveFont} font-bold`}>Empresa</p></li>
            </ul>
            </Link>

            <Link to="/dashboard" className="flex">
            <ul className={`${navButtonsStyle}`}>
              <RxDashboard />
              <li><p className={`${responsiveFont}`}>Dashboard</p></li>
            </ul>
            </Link>
            
            <Link to="/members" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <CgProfile />
                <li><p className={`${responsiveFont}`}>Members</p></li>
              </ul>
            </Link>

            <Link to="/customers" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <RiCustomerService2Fill />
                <li><p className={`${responsiveFont}`}>Customers</p></li>
              </ul>
            </Link>

            <Link to="/billings" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <RiBillLine />
                <li><p className={`${responsiveFont}`}>Billings</p></li>
              </ul>
            </Link>

            <Link to="/plans" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <RiMoneyDollarCircleLine />
                <li><p className={`${responsiveFont}`}>Plans</p></li>
              </ul>
            </Link>

            <Link to="/doctype" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <IoIosDocument />
                <li><p className={`${responsiveFont}`}>DocType</p></li>
              </ul>
            </Link>

            <Link to="/properties" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <LuTableProperties />
                <li><p className={`${responsiveFont}`}>Properties</p></li>
              </ul>
            </Link>

            <Link to="/integrations" className="flex">
              <ul className={`${navButtonsStyle}`}>
                <FaCodeBranch />
                <li><p className={`${responsiveFont}`}>Integrations</p></li>
              </ul>
            </Link>

          </div>

          <div className="flex items-center pr-8 gap-3">
              <CiSearch className={`${rightOptions}`}/>
              <CiSettings className={`${rightOptions}`}/>
              <DiJsBadge className="h-6 w-6 text-blue-600 rounded-full"/>
          </div>

        </div>
        <Outlet />
        <Navbar />
      </nav>
    </header>
  )
}

export default App;
