import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GetTime from "./GetTime.js";
import PageSwitch from "./PageSwitch.js";
import {
  style_nb_box_left,
  style_nb_box_right,
  style_nb_line,
  style_nb_mobile_button_left,
  style_nb_mobile_button_right,
  style_nb_mobile_overlay,
  style_nb_link,
} from "./styles.js";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1450);
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const [showRightMenu, setShowRightMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1450);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (path) => {
    if (location.pathname === path) return;
    if (location.pathname === "/") {
      PageSwitch(() => navigate(path));
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {/* DESKTOP */}
      {!isMobile && (
        <>
          <div style={style_nb_box_left}>
            <div style={style_nb_link} onClick={() => handleNavigation("/")} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}>Home Page</div>
            <div style={style_nb_line}>Lucas Hoskin</div>
            <div style={style_nb_line}>Computational Physics</div>
            <div style={style_nb_line}><GetTime /></div>
            {/* <div style={style_nb_link} onClick={() => handleNavigation("/music")} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}>Music Used</div> */}
          </div>

          <div style={style_nb_box_right}>
            {/* <div style={style_nb_link} onClick={() => handleNavigation("/contact")} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}>Contact Information</div> */}
            <div style={style_nb_link} onClick={() => handleNavigation("/career")} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}>Career Overview</div>
            <div style={style_nb_link} onClick={() => handleNavigation("/about")} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}>More About Me</div>
            <div style={style_nb_link} onClick={() => handleNavigation("/projects")} onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}>Projects</div>
          </div>
        </>
      )}

      {/* MOBILE */}
      {isMobile && (
        <>
          <button style={style_nb_mobile_button_left} onClick={() => setShowLeftMenu((prev) => !prev)}>☰</button>
          <button style={style_nb_mobile_button_right} onClick={() => setShowRightMenu((prev) => !prev)}>⋮</button>

          {showLeftMenu && (
            <div style={style_nb_mobile_overlay} onClick={() => setShowLeftMenu(false)}>
              <div style={style_nb_link} onClick={(e) => { e.stopPropagation(); handleNavigation("/"); setShowLeftMenu(false); }}>Home Page</div>
              <div style={style_nb_line}>Lucas Hoskin</div>
              <div style={style_nb_line}>Computational Physics</div>
              <div style={style_nb_line}><GetTime /></div>
              {/* <div style={style_nb_link} onClick={(e) => { e.stopPropagation(); handleNavigation("/music"); setShowRightMenu(false); }}>Music Used</div> */}
            </div>
          )}

          {showRightMenu && (
            <div style={style_nb_mobile_overlay} onClick={() => setShowRightMenu(false)}>
              {/* <div style={style_nb_link} onClick={(e) => { e.stopPropagation(); handleNavigation("/contact"); setShowRightMenu(false); }}>Contact Information</div> */}
              <div style={style_nb_link} onClick={(e) => { e.stopPropagation(); handleNavigation("/career"); setShowRightMenu(false); }}>Career Overview</div>
              <div style={style_nb_link} onClick={(e) => { e.stopPropagation(); handleNavigation("/about"); setShowRightMenu(false); }}>More About Me</div>
              <div style={style_nb_link} onClick={(e) => { e.stopPropagation(); handleNavigation("/projects"); setShowRightMenu(false); }}>Projects</div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default NavBar;
