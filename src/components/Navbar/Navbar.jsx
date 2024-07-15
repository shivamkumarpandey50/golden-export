// import { useState } from "react";
// import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
// import MenuLinks from "../MenuLinks/MenuLinks";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="logo-list">
//         <div className="logo">
//           <img src="/src/assets/final.png" alt="logo" />
//         </div>
//         <div className="list">
//           <ul>
//             <li>
//               <a href="index.html">Home</a>
//             </li>
//             <li>
//               <a href="index.html#about">About Us</a>
//             </li>
//             <li>
//               <a href="index.html#Industries">Our Industries</a>
//             </li>
//             <li>
//               <a href="index.html#Solutions">Our Solutions</a>
//             </li>
//             <li>
//               <a href="contact.html">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         <div className="hamburger">
//           <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
//           {isOpen && <MenuLinks />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import MenuLinks from "../MenuLinks/MenuLinks";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/src/assets/final.png" alt="logo" />
      </div>
      <div className="list">
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
      <div className="hamburger">
        <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>
      {isOpen && <MenuLinks toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;
