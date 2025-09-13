import React, { useEffect, useState, useRef } from "react";
import Logo from "../asset/image/debuglogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
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

  // Refs
  const menuRef = useRef(null);
  const sortRef = useRef(null);
  const categoryRef = useRef(null);

  // Load user from localStorage
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
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdown) return;

      let ref = null;
      if (dropdown === "menu") ref = menuRef;
      if (dropdown === "sort") ref = sortRef;
      if (dropdown === "category") ref = categoryRef;

      if (ref?.current && !ref.current.contains(event.target)) {
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
    <header>
      <div className="head_cover">
        {/* Left nav */}
        <nav className="head_container menu">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </nav>

        {/* Logo */}
        <Link to="/">
          <nav className="head_container logo">
            <img src={Logo} alt="logo" />
            <h5 className="logo">Campus Connect</h5>
          </nav>
        </Link>

        {/* Right nav */}
        <nav className="head_container">
          {/* Mobile Menu Dropdown */}
          <div className="dropdown_wrapper" ref={menuRef}>
            <button className="bar" onClick={() => handleDropDown("menu")}>
              <FaBarsStaggered />
            </button>
            {dropdown === "menu" && (
              <section className="dropdown">
                <div className="side">
                  {user.full_name ? (
                    <button>{user.full_name}</button>
                  ) : (
                    <Link to="/signin">
                      <button className="color">Register</button>
                    </Link>
                  )}
                </div>
                <nav>
                  <Link to="/"><li>Home</li></Link>
                  <Link to="/about"><li>About Us</li></Link>
                  <Link to="/contact"><li>Contact Us</li></Link>
                  {user.full_name && <Link to="/event"><li>Event</li></Link>}
                </nav>
              </section>
            )}
          </div>

          {/* User / Register */}
          {user.full_name ? (
            <button><FaRegUser /> {user.full_name}</button>
          ) : (
            <Link to="/register">
              <button className="color main">Register</button>
            </Link>
          )}

          {/* Event Button */}
          <button className="main" onClick={() => handleNavigate("/event")}>
            Event
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
