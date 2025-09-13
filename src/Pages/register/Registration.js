import React, { useState } from "react";
import "./register.css";
import Logo from "../../asset/image/debuglogo.png";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    status: "",
    student_id: ""
  });

  // handle input change
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("campusconnectUser", JSON.stringify(formData));
    console.log("User saved:", formData);

    // reset form
    setFormData({
      full_name: "",
      email: "",
      status: "",
      student_id: ""
    });

    // ✅ navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <>
      <Link to="/">
        <header className="reg">
          <img src={Logo} alt="logo" />
          <h4 className="logo">Campus Connect</h4>
        </header>
      </Link>
      <div className="reg_body_container">
        <form className="reg_container" onSubmit={handleSubmit}>
          <h3>Start Your Journey With Us Today</h3>
          <p>
            See what's happening on campus — from events to activities, everything you care about in one place.
          </p>

          <input
            type="text"
            name="full_name"
            id="full_name"
            value={formData.full_name}
            onChange={handleInput}
            placeholder="Enter Full Name"
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Enter Email Address"
            required
          />

          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleInput}
            required
          >
            <option value="">Select Status</option>
            <option value="visitor">Visitor</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>

          {(formData.status === "student" || formData.status === "faculty") && (
            <input
              type="text"
              name="student_id"
              id="student_id"
              value={formData.student_id}
              onChange={handleInput}
              placeholder="Enter ID"
            />
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
