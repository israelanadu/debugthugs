import React, { Component } from "react";
import Logo from "../asset/image/debuglogo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer_cover">
                    <section className="footer_contain">
                        <img src={Logo} alt="logo" />
                        <h5 className="logo">Campus Connect</h5>
                    </section>
                    <section className="footer_contain">
                        <div className="footer_container">
                            <nav className="footer_menu">
                                <h4>About Campus Connect</h4>
                                <p>
                                    Campus Connect is a platform that keeps students, visitors,
                                    and faculty informed about past, present, and upcoming events.
                                    Faculty members can share events directly, and users can see
                                    requirements to attend and participate.
                                </p>
                            </nav>

                            {/* Quick Links */}
                            <nav className="footer_menu">
                                <li className="head">Overview</li>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"> <li>About Us</li></Link>
                                <Link to="/contact"> <li>Contact Us</li></Link>
                                <li>Events</li>
                            </nav>

                            {/* User Account */}
                            <nav className="footer_menu">
                                <li className="head">Community</li>
                                <Link to="/register"><li>Register</li></Link>
                                <Link to="/register"><li>Login</li></Link>
                                <li>Feedback</li>
                                <li>FAQ</li>
                                <li>Support</li>
                            </nav>
                            <nav className="footer_menu">
                                <li className="head">Resources</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Community Guidelines</li>
                                <li>Help Center</li>
                            </nav>
                        </div>
                    </section>
                    <section className="footer_contain">
                        <div className="footer_end">
                            <div className="footer_content">
                                <section className="container">
                                    <FaFacebookF />
                                    <FaXTwitter />
                                    <FaTiktok />
                                    <IoLogoWhatsapp />
                                    <FaYoutube />
                                </section>
                                <section className="container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2714435556722!2d3.3519442682691745!3d6.613157793380878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b851c00d0e6d1%3A0x409a66f7b58f47d3!2sDrone%20GIS%20services%20-%20Geoinfotech%20Ltd!5e0!3m2!1sen!2sng!4v1757438844993!5m2!1sen!2sng" title="geoinfotech" width="100%" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </section>
                            </div>
                            <div className="footer_content">
                                <p>@Compus Connect all Right Reserved | created by DebugThug</p>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        )
    }
}


export default Footer