// // src/components/MenuLinks.js
// import React from "react";
// import "./MenuLinks.css";

// const MenuLinks = () => {
//   return (
//     <div className="menu-links">
//       <ul>
//         <li>
//           <a href="index.html">Home</a>
//         </li>
//         <li>
//           <a href="index.html#about">About Us</a>
//         </li>
//         <li>
//           <a href="index.html#Industries">Our Industries</a>
//         </li>
//         <li>
//           <a href="index.html#Solutions">Our Solutions</a>
//         </li>
//         <li>
//           <a href="contact.html">Contact Us</a>
//         </li>
//       </ul>
//       {/* <a href="#home">Home</a>
//       <a href="#about">About</a>
//       <a href="#services">Services</a>
//       <a href="#contact">Contact</a> */}
//     </div>
//   );
// };

// export default MenuLinks;

import React from "react";
import "./MenuLinks.css";

const MenuLinks = ({ toggleMenu }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="close-icon" onClick={toggleMenu}>
          &times;
        </div>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html#about">About Us</a>
          </li>
          <li>
            <a href="index.html#Industries">Our Industries</a>
          </li>
          <li>
            <a href="index.html#Solutions">Our Solutions</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuLinks;
