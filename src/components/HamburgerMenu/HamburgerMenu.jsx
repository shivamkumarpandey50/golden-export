// import "./HamburgerMenu.css";

// const HamburgerMenu = ({ toggleMenu, isOpen }) => {
//   return (
//     <div className="hamburger-menu" onClick={toggleMenu}>
//       <div className={isOpen ? "bar open" : "bar"}></div>
//       <div className={isOpen ? "bar open" : "bar"}></div>
//       <div className={isOpen ? "bar open" : "bar"}></div>
//     </div>
//   );
// };

// export default HamburgerMenu;

import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div className="hamburger-icon" onClick={toggleMenu}>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
    </div>
  );
};

export default HamburgerMenu;
