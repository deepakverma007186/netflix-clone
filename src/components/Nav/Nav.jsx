import "./Nav.css";
// import { useEffect, useState } from "react";

function Nav() {
  // const [show, handleShow] = useState([false]);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    // <div className={`nav ${show && "nav__black"}`}>
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png"
        alt="Logo Trailer"
      />
      <img
        className="nav__avatar"
        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-profile-2920802-2434482.png?f=avif&w=256"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
