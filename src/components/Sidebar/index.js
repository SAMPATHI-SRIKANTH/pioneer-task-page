import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../../context/SidebarContext";

import { FaFire } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CgOrganisation } from "react-icons/cg";
import { IoCubeOutline } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { LuHistory } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("open");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div class={`sidebar ${sidebarClass}`}>
      <div className="logo-details">
        <FaFire className="logo-icon" />
        <div className="logo-name">
          Carbon <br />
          Cell
        </div>
        <IoMdMenu className="menu-icon" onClick={() => toggleSidebar()} />
      </div>

      <ul className="nav-list">
        <li className="nav-item">
          <IoIosSearch className="search-icon" />
          <input type="search" placeholder="search" />
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <IoHomeOutline className="nav-link-icon" />
            <span className="links-name">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/organisation" className="nav-link">
            <CgOrganisation className="nav-link-icon" />
            <span className="links-name">Organisation</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/assets" className="nav-link">
            <IoCubeOutline className="nav-link-icon" />
            <span className="links-name">Assets</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/trade" className="nav-link">
            <LuArrowDownUp className="nav-link-icon" />
            <span className="links-name">Trade</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/history" className="nav-link">
            <LuHistory className="nav-link-icon" />
            <span className="links-name">History</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wallet" className="nav-link">
            <IoWalletOutline className="nav-link-icon" />
            <span className="links-name">Wallet</span>
          </Link>
          {/* <span className="tooltip">Home</span> */}
        </li>

        <li className="nav-item">
          <Link to="/notifications" className="nav-link">
            <IoMdNotificationsOutline className="nav-link-icon" />
            <span className="links-name">
              Notifications <span className="count">12</span>
            </span>
          </Link>
          {/* <span className="tooltip">Home</span> */}
        </li>
        <li className="nav-item">
          <Link to="/support" className="nav-link">
            <MdOutlineContactSupport className="nav-link-icon" />
            <span className="links-name">Support</span>
          </Link>
          {/* <span className="tooltip">Home</span> */}
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <IoSettingsOutline className="nav-link-icon" />
            <span className="links-name">Settings</span>
          </Link>
          {/* <span className="tooltip">Home</span> */}
        </li>
        <li className="nav-item profile">
          <div className="profile-details">
            <img
              src="https://cdn-icons-png.freepik.com/512/3135/3135715.png?ga=GA1.1.1133131024.1695120805&"
              alt="profile-img"
            />
            <div className="profile-content">
              <div className="name">SAM</div>
              <div className="mail">sam123@gmail.com</div>
            </div>
            <BsThreeDotsVertical className="three-dots-icon" />
          </div>
        </li>
      </ul>
    </div>
  );

  // <div className={`sidebar ${sidebarClass}`}>
  //   <div className="user-info">
  //     <div className="info-img img-fit-cover"></div>
  //     <span className="info-name">alice-doe</span>
  //   </div>
  //   {/* <div className="logo-content">
  //     <div className="logo">
  //       <FaFire className="logo-icon" />
  //       <div className="logo-name">
  //         Carbon <br />
  //         Cell
  //       </div>
  //     </div>
  //     <IoMdMenu className="menu-icon" />
  //   </div> */}
  //   <nav className="navigation">
  //     <ul className="nav-list">
  //       <li>
  //         <IoIosSearch className="search-icon" />
  //         <input type="search" placeholder="search" />
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <IoHomeOutline className="nav-link-icon" />
  //           <span className="nav-link-text">Home</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <CgOrganisation className="nav-link-icon" />
  //           <span className="nav-link-text">Organisation</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <IoCubeOutline className="nav-link-icon" />
  //           <span className="nav-link-text">Assets</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <LuArrowDownUp className="nav-link-icon" />
  //           <span className="nav-link-text">Trade</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <LuHistory className="nav-link-icon" />
  //           <span className="nav-link-text">History</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <IoWalletOutline className="nav-link-icon" />
  //           <span className="nav-link-text">Wallet</span>
  //         </Link>
  //       </li>
  //     </ul>
  //     <ul className="nav-list nav-bottom">
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <IoMdNotificationsOutline className="nav-link-icon" />
  //           <span className="nav-link-text">Notifications</span>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/" className="nav-link">
  //           <MdOutlineContactSupport className="nav-link-icon" />
  //           <span className="nav-link-text">Support</span>
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to="/" className="nav-link">
  //           <IoSettingsOutline className="nav-link-icon" />
  //           <span className="nav-link-text">Settings</span>
  //         </Link>
  //       </li>
  //     </ul>
  //   </nav>
  // </div>
};

export default Sidebar;
