import React from "react";
import "./Toggle.css";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

function Toggle({ toggleTheme }) {
  return (
    <div>
      <label class="switch">
        <input onChange={toggleTheme} type="checkbox" />
        <span class="slider round">
          <div id="icons">
            <div>
              <IoSunnyOutline className="sun-icon" />
            </div>
            <div>
              <IoMoonOutline className="moon-icon" />
            </div>
          </div>
        </span>
      </label>
    </div>
  );
}

export default Toggle;
