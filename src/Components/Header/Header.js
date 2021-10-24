import React from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./Header.css";
const Header = () => {
  //react spring animation property
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  //active link property
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div className="header" style={{ position: "sticky", top: "0",zIndex:'999' }}>
      <div className="logo">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavLink to="/home">
            {" "}
            <img src={logo} alt="" />
          </NavLink>
          <NavLink to="/home">
            {" "}
            <animated.div style={styles}>
              <small>React Spring Animation</small>
            </animated.div>
          </NavLink>
        </div>
      </div>
      <div>
        <nav>
          <NavLink activeStyle={activeStyle} to="/home">
            Home
          </NavLink>
          <NavLink activeStyle={activeStyle} to="/countries">
            Countries
          </NavLink>
          <NavLink activeStyle={activeStyle} to="/about">
            About
          </NavLink>
          <NavLink activeStyle={activeStyle} to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
