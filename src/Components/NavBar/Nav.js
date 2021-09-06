import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StyleNav.css";
import { FaBars, FaSortDown, FaHome, FaPhone } from "react-icons/fa";
import DropDown from "./DropDown";
import ToggleMenus from "./ToggleMenus";
import logo from "../../images/logo.png";

const NavIgation = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  const DropMenus = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-12 col-lg-6 logo-container">
          <div className="row p-2">
            <div className="col-6 text-center logo">two sketch</div>
            <div className="col-6 text-center hamb">
              <FaBars onClick={DropMenus} className="hamberger" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 menu-container">
          <div className="row p-2">
            <div className="col-12 col-lg-3 text-center p-1">
              {/* <Link to="/" className="H-link"> */}
              <Link to="/" className="H-link">
                Home
              </Link>
              <span>
                <FaHome className="home-logo" />
              </span>
            </div>

            <div className="col-12 col-lg-3 text-center p-1">
              <Link to="/contact" className="H-link">
                Contact
              </Link>
              <span>
                <FaPhone className="phone-logo" />
              </span>
            </div>

            <div
              className="col-12 col-lg-3 text-center h-menu p-1"
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
      </div>
      <ToggleMenus value={toggle} show={show} setShow={setShow} />
    </div>
  );
};

export default NavIgation;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./StyleNav.css";
// import { FaBars, FaSortDown, FaHome, FaPhone } from "react-icons/fa";
// import DropDown from "./DropDown";
// import ToggleMenus from "./ToggleMenus";
// import logo from "../../images/logo.png";

// const NavIgation = () => {
//   const [show, setShow] = useState(false);
//   const [toggle, setToggle] = useState(false);

//   const handleChange = () => {
//     setShow(!show);
//   };

//   const DropMenus = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="container-fluid main-container">
//       <div className="row">
//         <div className="col-12 col-lg-6 logo-container">
//           <div className="row p-2">
//             <div className="col-6 text-center logo">
//               {/* <img
//                 className="logoImage"
//                 src={logo}
//                 alt=""
//                 height="50px"
//                 width="200px"
//               /> */}
//               two sketch
//             </div>
//             <div className="col-6 text-center hamb">
//               <FaBars onClick={DropMenus} className="hamberger" />
//             </div>
//           </div>
//         </div>
//         <div className="col-12 col-lg-6 menu-container">
//           <div className="row p-2">
//             <div className="col-12 col-lg-3 text-center p-1">
//               <Link to="/" className="H-link">
//                 Home
//               </Link>
//               <span>
//                 <FaHome className="home-logo" />
//               </span>
//             </div>

//             <div className="col-12 col-lg-3 text-center p-1">
//               <Link to="/contact" className="H-link">
//                 Contact
//               </Link>
//               <span>
//                 <FaPhone className="phone-logo" />
//               </span>
//             </div>

//             <div
//               className="col-12 col-lg-3 text-center h-menu p-1"
//               onClick={handleChange}
//             >
//               Works
//               <span>
//                 <FaSortDown className="down-arrow" />
//               </span>
//               <DropDown value={show} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToggleMenus value={toggle} show={show} setShow={setShow} />
//     </div>
//   );
// };

// export default NavIgation;
