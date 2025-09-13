import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const DashMenu = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Remove the saved user from localStorage
    localStorage.removeItem("campusconnectUser");

    // Redirect to home
    navigate("/");
  };

  return (
    <div className="dash_menu_container">
      <nav className="dash_menu_cover">
        <NavLink to="/dashboard">
          <li className="active">
            <div className="line"></div> Dashboard
          </li>
        </NavLink>
        <NavLink to="/event">
          <li>
            <div className="line"></div> Event
          </li>
        </NavLink>
        <NavLink to="/gallery">
          <li>
            <div className="line"></div> Gallery
          </li>
        </NavLink>
        <li onClick={handleSignout}>
          <div className="line"></div> Sign out
        </li>
      </nav>
    </div>
  );
};

export default DashMenu;
