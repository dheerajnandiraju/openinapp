import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../images/logo.png";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { HiMiniTicket } from "react-icons/hi2";
import { RiFolderUploadFill } from "react-icons/ri";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

function Sidebar({ toggletheme }) {
  const [collapse, setcollapse] = useState(false);
  const oncollapse = () => {
    setcollapse(!collapse);
    if (!collapse) {
      const body = document.getElementsByClassName("body")[0];
      body.style.width = "8vw";
    }

    if (collapse) {
      const body = document.getElementsByClassName("body")[0];
      body.style.width = "20vw";
    }
  };

  const [activeItem, setActiveItem] = useState("Upload"); // Set initial active item

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="body">
      <div id="logo">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img id="ll" src={logo} alt="" />
          {!collapse && <h2>BASE</h2>}
        </div>
        <TbLayoutSidebarRightCollapse
          style={{ right: 5 }}
          onClick={oncollapse}
          size={30}
        />
      </div>
      <div className="pages">
        {!collapse && (
          <ul>
            <li
              onClick={() => handleItemClick("Dashboard")}
              className={activeItem === "Dashboard" ? "active" : ""}
            >
              <i className="fa fa-th-large"></i> <RxDashboard size={20} />
              Dashboard
            </li>
            <li
              onClick={() => handleItemClick("Upload")}
              className={activeItem === "Upload" ? "active" : ""}
            >
              <i className="fa fa-upload"></i>
              <RiFolderUploadFill size={20} />
              Upload
            </li>
            <li
              onClick={() => handleItemClick("Invoice")}
              className={activeItem === "Invoice" ? "active" : ""}
            >
              <i className="fa fa-file-invoice"></i>
              <HiMiniTicket size={20} /> Invoice
            </li>
            <li
              onClick={() => handleItemClick("Schedule")}
              className={activeItem === "Schedule" ? "active" : ""}
            >
              <i className="fa fa-calendar-check"></i>
              <BsFillFileEarmarkTextFill size={20} /> Schedule
            </li>
            <li
              onClick={() => handleItemClick("Calendar")}
              className={activeItem === "Calendar" ? "active" : ""}
            >
              <i className="fa fa-calendar"></i>
              <FaCalendarDays size={20} /> Calendar
            </li>
            <li
              onClick={() => handleItemClick("Notification")}
              className={activeItem === "Notification" ? "active" : ""}
            >
              <i className="fa fa-bell"></i>
              <IoNotifications size={20} /> Notification
            </li>
            <li
              onClick={() => handleItemClick("Settings")}
              className={activeItem === "Settings" ? "active" : ""}
            >
              <i className="fa fa-cog"></i>
              <FaGear size={20} /> Settings
            </li>
          </ul>
        )}

        {collapse && (
          <ul>
            <li
              onClick={() => handleItemClick("Dashboard")}
              className={activeItem === "Dashboard" ? "active" : ""}
            >
              <i className="fa fa-th-large"></i> <RxDashboard size={30} />
            </li>
            <li
              onClick={() => handleItemClick("Upload")}
              className={activeItem === "Upload" ? "active" : ""}
            >
              <i className="fa fa-upload"></i>
              <RiFolderUploadFill size={30} />
            </li>
            <li
              onClick={() => handleItemClick("Invoice")}
              className={activeItem === "Invoice" ? "active" : ""}
            >
              <i className="fa fa-file-invoice"></i>
              <HiMiniTicket size={30} />
            </li>
            <li
              onClick={() => handleItemClick("Schedule")}
              className={activeItem === "Schedule" ? "active" : ""}
            >
              <i className="fa fa-calendar-check"></i>
              <BsFillFileEarmarkTextFill size={30} />
            </li>
            <li
              onClick={() => handleItemClick("Calendar")}
              className={activeItem === "Calendar" ? "active" : ""}
            >
              <i className="fa fa-calendar"></i>
              <FaCalendarDays size={30} />
            </li>
            <li
              onClick={() => handleItemClick("Notification")}
              className={activeItem === "Notification" ? "active" : ""}
            >
              <i className="fa fa-bell"></i>
              <IoNotifications size={30} />
            </li>
            <li
              onClick={() => handleItemClick("Settings")}
              className={activeItem === "Settings" ? "active" : ""}
            >
              <i className="fa fa-cog"></i>
              <FaGear size={30} />
            </li>
          </ul>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Sidebar;
