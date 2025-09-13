import React, { useEffect, useState, useRef } from "react";
import Logo from "../asset/image/debuglogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const DashHeader = () => {
  const navigate = useNavigate();

  // User state
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    status: "",
    student_id: ""
  });

  // Dropdown state
  const [dropdown, setDropdown] = useState(null);

  // ✅ Ref for menu dropdown
  const menuRef = useRef(null);

  // Load user data
  useEffect(() => {
    const savedUser = localStorage.getItem("campusconnectUser");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser({
        full_name: userData.full_name || "",
        email: userData.email || "",
        status: userData.status || "",
        student_id: userData.student_id || ""
      });
    } else {
      navigate("/");
    }
  }, [navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdown) return;

      if (dropdown === "menu" && menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown]);

  // Toggle dropdown
  const handleDropDown = (value) => {
    setDropdown((prev) => (prev === value ? null : value));
  };

  // Navigation handler
  const handleNavigate = (path) => {
    if (path === "/event") {
      if (user.full_name && user.full_name.trim() !== "") {
        navigate("/event");
      } else {
        navigate("/register");
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className="box">
      <div className="head_cover">
        {/* Logo */}
        <Link to="/">
          <nav className="head_container">
            <img src={Logo} alt="logo" />
            <h5 className="logo">Campus Connect</h5>
          </nav>
        </Link>

        {/* Search */}
        <nav className="head_container menu">
          <form className="head_search">
            <input placeholder="Search For Event" />
            <button className="color" type="button">Search</button>
          </form>
        </nav>

        {/* Right side */}
        <nav className="head_container">
          {/* Dropdown Menu */}
          <div className="dropdown_wrapper" ref={menuRef}>
            <button className="bar" onClick={() => handleDropDown("menu")}>
              <FaBarsStaggered />
            </button>
            {dropdown === "menu" && (
              <section className="dropdown">
                <nav>
                  <Link to="/dashboard"><li>Dashboard</li></Link>
                  <Link to="/event"><li>Events</li></Link>
                  <Link to="/about"><li>Gallary</li></Link>
                  <Link to="/contact"><li>Contact</li></Link>
                </nav>
              </section>
            )}
          </div>

          {/* User/Register */}
          {user.full_name ? (
            <button><FaRegUser /> {user.full_name}</button>
          ) : (
            <Link to="/register">
              <button className="color main">Register</button>
            </Link>
          )}

          {/* Event */}
          <button className="main" onClick={() => handleNavigate("/event")}>
            Event
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DashHeader;
