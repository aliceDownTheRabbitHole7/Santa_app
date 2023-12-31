import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from '../../data/SideBarData'
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa6";
import "../../styles/SideBar.css";

function SideBar({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidebarElements = SideBarData.map((item, index) => {
    return (
      <li key={index} className='nav-text'>
        <Link to={item.path} className="nav-link">
          {item.icon}
          <span className="ml-3">{item.title}</span>
        </Link>
      </li>
    );
  })

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}} className='nav-container'>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="h-6 w-6 mt-2" />
          </Link>
          <div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle flex justify-start">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {sidebarElements}
              </ul>
            </nav>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
