import React, { useRef, useState, useEffect } from "react";
import Papa from "papaparse";
import Sidebar from "../components/Sidebar";
import Toggle from "../components/Toggle";
import CSVReader from "react-csv-reader";
import "../components/Sidebar.css";
import logo from "../images/logo.png";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { HiMiniTicket } from "react-icons/hi2";
import { RiFolderUploadFill } from "react-icons/ri";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import excel from "../images/excel.png";

function Home({ theme }) {
  const [selectedData, setSelectedData] = useState({});
  const [color, setcolor] = useState("false");
  const [table, settable] = useState(false);
  const buttontheme = () => {
    setcolor(!color);
    const body = document.getElementsByClassName("sidebar-body")[0];
    const table = document.getElementsByClassName("customers")[0];
    const tablerow = document.getElementsByClassName("customersrow");

    if (color) {
      body.classList.toggle("l-sidebar-body");

      if (table) {
        table.classList.toggle("l-customers");
        tablerow[0].classList.toggle("l-customersrow");
        tablerow[1].classList.toggle("l-customersrow");
        tablerow[2].classList.toggle("l-customersrow");
        tablerow[3].classList.toggle("l-customersrow");
        tablerow[4].classList.toggle("l-customersrow");
      }
    }
  };

  console.log(selectedData);

  const [collapse, setcollapse] = useState(false);
  const oncollapse = () => {
    setcollapse(!collapse);
    const body = document.getElementsByClassName("sidebar-body")[0];
    body.style.width = collapse ? "20vw" : "8vw";
  };

  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  // CSV reader code
  const csvUploadContainerRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (csvUploadContainerRef.current) {
      const csvUploadContainer = csvUploadContainerRef.current;
      csvUploadContainer.addEventListener("dragover", (e) => {
        e.preventDefault();
        csvUploadContainer.style.backgroundColor = "lightblue";
      });

      csvUploadContainer.addEventListener("dragleave", (e) => {
        e.preventDefault();
        csvUploadContainer.style.backgroundColor = "transparent";
      });

      csvUploadContainer.addEventListener("drop", (e) => {
        e.preventDefault();
        csvUploadContainer.style.backgroundColor = "transparent";

        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        if (file.type.startsWith("text/csv")) {
          reader.onload = (event) => {
            const csvData = event.target.result;
            // Process the CSV data here
            console.log("CSV Data:", csvData);

            // Example using Papa Parse to parse the CSV:
            Papa.parse(csvData, {
              complete: (results) => {
                console.log("Parsed CSV Data:", results.data);
              },
            });
          };
          reader.readAsText(file);
        } else {
          alert("Please upload a CSV file.");
        }
        reader.onload = (event) => {
          const csvData = event.target.result;
          Papa.parse(csvData, {
            complete: (results) => {
              setData(results.data);
            },
          });
        };
      });
    }
  }, []);

  const handleDropdownChange = (index, selectedOption) => {
    const updatedSelectedData = { ...selectedData };

    if (updatedSelectedData[index]) {
      // If the row already has selected options, check if the selected option is already included
      if (!updatedSelectedData[index].includes(selectedOption)) {
        updatedSelectedData[index] = [
          ...updatedSelectedData[index],
          selectedOption,
        ]; // Add the selected option if it's not already included
      } else {
        // If the selected option is already included, remove it
        updatedSelectedData[index] = updatedSelectedData[index].filter(
          (option) => option !== selectedOption
        );
      }
    } else {
      // If the row has no selected options, initialize with the selected option
      updatedSelectedData[index] = [selectedOption];
    }

    setSelectedData(updatedSelectedData);
  };

  function Tag({ tag, onClose }) {
    return (
      <div className="tag">
        {tag}
        <span className="close-icon" onClick={onClose}>
          x
        </span>
      </div>
    );
  }

  const handleTagRemove = (index, tag) => {
    const updatedSelectedData = { ...selectedData };
    updatedSelectedData[index] = updatedSelectedData[index].filter(
      (t) => t !== tag
    );
    setSelectedData(updatedSelectedData);
  };

  const showtable = () => {
    settable(!table);
  };
  return (
    <div style={{ display: "inline-flex", alignItems: "flex-start" }}>
      <div>
        <div className="sidebar-body">
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
                  <i className="fa fa-th-large"></i> <RxDashboard size={20} />{" "}
                  Dashboard
                </li>
                <li
                  onClick={() => handleItemClick("Upload")}
                  className={activeItem === "Upload" ? "active" : ""}
                >
                  <i className="fa fa-upload"></i>{" "}
                  <RiFolderUploadFill size={20} /> Upload
                </li>
                <li
                  onClick={() => handleItemClick("Invoice")}
                  className={activeItem === "Invoice" ? "active" : ""}
                >
                  <i className="fa fa-file-invoice"></i>{" "}
                  <HiMiniTicket size={20} /> Invoice
                </li>
                <li
                  onClick={() => handleItemClick("Schedule")}
                  className={activeItem === "Schedule" ? "active" : ""}
                >
                  <i className="fa fa-calendar-check"></i>{" "}
                  <BsFillFileEarmarkTextFill size={20} /> Schedule
                </li>
                <li
                  onClick={() => handleItemClick("Calendar")}
                  className={activeItem === "Calendar" ? "active" : ""}
                >
                  <i className="fa fa-calendar"></i>{" "}
                  <FaCalendarDays size={20} /> Calendar
                </li>
                <li
                  onClick={() => handleItemClick("Notification")}
                  className={activeItem === "Notification" ? "active" : ""}
                >
                  <i className="fa fa-bell"></i> <IoNotifications size={20} />{" "}
                  Notification
                </li>
                <li
                  onClick={() => handleItemClick("Settings")}
                  className={activeItem === "Settings" ? "active" : ""}
                >
                  <i className="fa fa-cog"></i> <FaGear size={20} /> Settings
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
                  <i className="fa fa-upload"></i>{" "}
                  <RiFolderUploadFill size={30} />
                </li>
                <li
                  onClick={() => handleItemClick("Invoice")}
                  className={activeItem === "Invoice" ? "active" : ""}
                >
                  <i className="fa fa-file-invoice"></i>{" "}
                  <HiMiniTicket size={30} />
                </li>
                <li
                  onClick={() => handleItemClick("Schedule")}
                  className={activeItem === "Schedule" ? "active" : ""}
                >
                  <i className="fa fa-calendar-check"></i>{" "}
                  <BsFillFileEarmarkTextFill size={30} />
                </li>
                <li
                  onClick={() => handleItemClick("Calendar")}
                  className={activeItem === "Calendar" ? "active" : ""}
                >
                  <i className="fa fa-calendar"></i>{" "}
                  <FaCalendarDays size={30} />
                </li>
                <li
                  onClick={() => handleItemClick("Notification")}
                  className={activeItem === "Notification" ? "active" : ""}
                >
                  <i className="fa fa-bell"></i> <IoNotifications size={30} />
                </li>
                <li
                  onClick={() => handleItemClick("Settings")}
                  className={activeItem === "Settings" ? "active" : ""}
                >
                  <i className="fa fa-cog"></i> <FaGear size={30} />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div onClick={buttontheme} className="swtich">
        <Toggle toggleTheme={theme} />
      </div>
      <div>
        <div className="topbar">
          <h1>Upload CSV</h1>
          <div>
            <IoNotifications size={30} />
          </div>
        </div>
        <div className="right-bottom">
          <div className="csv-upload-container" ref={csvUploadContainerRef}>
            <input
              type="file"
              accept=".csv"
              id="csv-input"
              style={{ display: "none" }}
            />
            <img className="excel" src={excel} alt="" />
            <label htmlFor="csv-input" className="csv-upload-label">
              Drag and Drop CSV File Here
            </label>
          </div>
          <button onClick={showtable} className="upload">
            <FiUpload />
            Upload
          </button>
        </div>
        <div>
          {table && (
            <table className="customers">
              <thead>
                <tr>
                  {data.length > 0 &&
                    data[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data.slice(1, 6).map((row, index) => (
                  <tr className="customersrow" key={index}>
                    {row.map((cell, colIndex) =>
                      colIndex === 3 ? (
                        <td>
                          <select
                            id={`select-${index}`}
                            name={`select-${index}`}
                            value={selectedData[index] || ""}
                            onChange={(e) =>
                              handleDropdownChange(index, e.target.value)
                            }
                          >
                            {cell.split(",").map((option, index) => (
                              <option key={index}>{option}</option>
                            ))}
                          </select>
                        </td>
                      ) : colIndex === 4 ? (
                        <td>
                          {selectedData[index]?.map((tag) => (
                            <Tag
                              key={tag}
                              tag={tag}
                              onClose={() => handleTagRemove(index, tag)}
                            />
                          ))}
                        </td>
                      ) : (
                        <td>{cell}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
