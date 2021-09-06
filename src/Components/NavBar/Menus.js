import React, { useState } from "react";
import DropDown from "./DropDown";
import { FaSortDown, FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menus = ({ toggleVal }) => {
  return (
    <div className="col-12 col-md-6 menu-container box">
      <div className="row p-2">
        <div className="col-12 col-md-3 text-center box p-1">
          <Link to="/">Home</Link>
          <span>
            <FaHome className="home-logo" />
          </span>
        </div>

        <div className="col-12 col-md-3 text-center box p-1">
          <Link to="/contact">Contact</Link>
          <span>
            <FaPhone className="phone-logo" />
          </span>
        </div>

        <div
          className="col-12 col-md-3 text-center p-1 box"
          onClick={handleChange}
        >
          Works
          <span>
            <FaSortDown className="down-arrow" />
          </span>
          <DropDown value={show} />
        </div>
      </div>
    </div>
  );
};

export default Menus;
