import React, { Component } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Image from "../asset/image/aboutimg.jpg"
import Image1 from "../asset/image/aboutimg1.jpg"
import Image2 from "../asset/image/aboutimg2.jpg"
import Image3 from "../asset/image/aboutimg3.jpg"
import Image4 from "../asset/image/aboutimg4.jpg"
import Image5 from"../asset/image/aboutimg5.jpg"
import Image6 from"../asset/image/aboutimg6.jpg"
import { FaCalendarCheck } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { RiSmartphoneFill } from "react-icons/ri";


class AboutUs extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="About_main_container">
                    <img src={Image} alt="imagei" />
                    <div className="container_content">
                        <h1>About Compus Connect</h1>
                        <p>Helping students stay informed, engaged, and connected to everything happening at school.</p>
                    </div>
                </div>


                <div className="about_overlay_container">
                    <div className="container_content">
                        <section className="contain content">
                            <h3>We Are Compus Connect</h3>
                            <p>Campus Connect is a student-friendly platform that keeps you updated on all campus events and activities.
                                From club meetings to major school functions, everything is organized in one place. Stay informed, never miss out,
                                and make the most of your campus life — effortlessly and in real time.
                                <br /><br />
                                From parties to projects, Campus Connect makes it easy to find and follow everything happening at your school,
                                Most importantly Campus Connect is <strong>Visitors friendly</strong>.
                            </p>
                        </section>
                        <section className="contain image">
                            <img src={Image1} alt="image1" />
                        </section>
                    </div>
                </div>


                <div className="about_subbody_container">
                    <div className="about_subbody_cover">
                        <section className="image contain">
                            <div className="photo">
                            <img src={Image5} alt="image5" />
                            </div>
                            <div className="subimage">
                                <img  src={Image6} alt="image6" />
                            </div>
                        </section>
                        <section className="content contain">
                            <h3>Why Choose Us</h3>
                            <p>We make it easy to stay connected with all campus events in one simple, reliable platform — so you never miss out. </p>
                            <h4>What sets us apart?</h4>
                            <li><FaCalendarCheck /> All Events Covered</li>
                            <li><MdNotificationsActive />Instant Updates</li>
                            <li> <FaHeartCircleCheck />Personalized suggestions</li>
                            <li><RiSmartphoneFill />Mobile Ready</li>
                        </section>
                    </div>
                </div>



                <div className="about_leaders_container">
                    <div className="leading_cover">
                        <div className="head">
                            <h2>Founders</h2>
                            <h3>Meet Our Leaders</h3>
                            <p>Get to know the team guiding Campus Connect.</p>

                        </div>

                        <div className="container">
                            <section className="image">
                                <img src={Image2} alt="image2"/>
                                <div className="background_content">

                                    <div className="content">
                                        <h4>
                                            <span>Marketer</span><br />
                                            Micheal Ikemelu
                                        </h4>
                                    </div>
                                </div>
                            </section>
                            <section className="image">
                                   <img src={Image3} alt="image3"/>
                                <div className="background_content">
                                    <div className="content">
                                        <h4>
                                            <span>CEO</span><br />
                                            Esther Anadu
                                        </h4>
                                    </div>
                                </div>
                            </section>
                            <section className="image">
                                   <img src={Image4} alt="image4"/>
                                <div className="background_content">
                                    <div className="content">
                                        <h4>
                                            <span>Finance and Account</span><br />
                                           Kelvin Eberuwa
                                        </h4>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>

                <Footer />
            </>
        )
    }
}


export default AboutUs