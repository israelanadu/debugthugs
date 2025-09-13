import React, { Component } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../asset/image/landingimg.jpg"
import Images1 from "../asset/image/landingimg1.jpg"

import Images2 from "../asset/image/landingimg2.jpg"
import Images3 from "../asset/image/lannding3.jpg"
import Images4 from "../asset/image/landingimage.jpg"
import Images5 from "../asset/image/landingimg4.jpg"

import { connect } from "react-redux"


function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') 
        .replace(/^-+|-+$/g, '');   
}

class LandingPage extends Component {
    state = {
        user: {
            full_name: "",
            email: "",
            status: "",
            student_id: ""
        },
        eventData: []
    }
    componentDidMount() {
        const savedUser = localStorage.getItem("campusconnectUser");
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            this.setState({
                user: {
                    full_name: userData.full_name || "",
                    email: userData.email || "",
                    status: userData.status || "",
                    student_id: userData.student_id || ""
                }
            });
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.event !== this.props.event) {
            this.setState({ eventData: this.props.event });
        }
    }

    handleNavigate = (path, event = null) => {
        const { user } = this.state;
    
        // if it's the general event page
        if (path === "/event") {
            if (user.full_name && user.full_name.trim() !== "") {
                window.location = "/event";
            } else {
                window.location = "/register";
            }
        }
        // if it's a specific event details page
        else if (path === "event_detail" && event) {
            const slug = slugify(event.title);
            const eventPath = `/event/${event.id}/${slug}`;
    
            if (user.full_name && user.full_name.trim() !== "") {
                window.location = eventPath;
            } else {
                window.location = "/register";
            }
        }
        // default navigation
        else {
            window.location = path;
        }
    };



    render() {
       
        const event = this.props.event;
        console.log(this.props.event, event)
        const eventList =
            event && event.length > 0
                ? event.slice(0, 3).map((list, index) => {
                    return (
                        // <Link to={`/event/${list.id}/${slugify(list.title)}`}>
                            <section key={index} className="event_card" onClick={() => this.handleNavigate("event_detail", list)}>
                                <div className="image">
                                    <img src={list.thumbnails} alt="event" />
                                    <div className="info">
                                        <p>{list.time}</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{list.title}</h3>
                                    <p>{list.description}</p>
                                    <div className="button">
                                        <div>
                                            <h4>Read More</h4>
                                            <button>
                                                <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        // </Link>
                    );
                })
                : null;

        return (
            <>
                <Header />
                <div className="Landing_container_body">
                    <div className="landing_main_contain">
                        <section className="landing_duble_cover">
                            <div className="landing_content">
                                <h1>Welcome to <span> campus </span>connect</h1>
                                <p>This is your go-to platform for discovering campus events, activities, and updates. Whether you’re a student, parent, or visitor. </p>
                                <div className="button">
                                    <Link to="/register"><button className="color">Register</button></Link>
                                    <button onClick={() => this.handleNavigate("/event")}>Event</button>
                                </div>
                            </div>
                        </section>
                        <section className="landing_duble_cover">
                            <div className="landing_design_one"></div>
                            {/* <div className="landing_design_two"></div> */}
                            <div className="landing_image"><img src={Image} alt="image1" /></div>
                        </section>
                    </div>




                    <div className="landing_record_bar">
                        <div className="record_cover">
                            <h4> 15
                                <br />
                                <span>Event</span>
                            </h4>
                            <h4>20
                                <br />
                                <span>Partners</span>
                            </h4>
                            <h4>
                                24/7
                                <br />
                                <span>Available</span>
                            </h4>
                        </div>
                    </div>



                    <div className="landing_event_container">
                        <div className="event_cover">
                            <div className="head">
                                <h2>Event</h2>
                                <h3>What’s Happening Next</h3>
                                <p>Stay up to date with all upcoming campus events, from student activities to public gatherings — all in one place.</p>
                            </div>

                            <div className="event_card_container">
                                {/* <section className="event_card">
                                    <div className="image">
                                        {/* <img /> 
                                        <div className="info">
                                            <p>Lorem, ipsum</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3> Lorem, ipsum dolor sit amet </h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis mollitia</p>
                                        <div class="button">
                                            <div>
                                                <h4>Read More</h4>
                                                <button><FaArrowRight /></button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="event_card">
                                    <div className="image">
                                        {/* <img /> 
                                        <div className="info">
                                            <p>Lorem, ipsum</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3> Lorem, ipsum dolor sit amet </h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis mollitia</p>
                                        <div class="button">
                                            <div>
                                                <h4>Read More</h4>
                                                <button><FaArrowRight /></button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="event_card">
                                    <div className="image">
                                        {/* <img /> 
                                        <div className="info">
                                            <p>Lorem, ipsum</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3> Lorem, ipsum dolor sit amet </h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis mollitia</p>
                                        <div class="button">
                                            <div>
                                                <h4>Read More</h4>
                                                <button><FaArrowRight /></button>
                                            </div>
                                        </div>
                                    </div>
                                </section> */}
                                {eventList}
                            </div>

                        </div>
                    </div>



                    <div className="landing_about_container">
                        <div className="about_cover">
                            <section className="img">
                                <img src={Images1} alt="images1"></img>

                            </section>
                            <section className="content">
                                <h2><span>Vision</span><br />
                                    Building What’s Next
                                </h2>
                                <p>We aim to make campus events more accessible, engaging, and inclusive for students, staff, and the wider community. By combining simplicity, Campus Connect is building a future where no one misses out on what matters. </p>
                                <Link to="/about">  <div class="button">
                                    <div>
                                        <h4>Read More</h4>
                                        <button><FaArrowRight /></button>
                                    </div>
                                </div> </Link>
                            </section>
                        </div>
                    </div>


                    <div className="landing_purpose_container">
                        <div className="purpose_cover">
                            <div className="head">
                                <h2>Purpose</h2>
                                <h3>What Drives Us</h3>
                                <p>We unite the campus by making it simple to find and join meaningful events that bring everyone together.</p>
                            </div>

                            <div className="purpose_content_contain">
                                <section className="container left">
                                    <img src={Images2} alt="image2" />
                                    <div className="content_background">
                                        <div className="write">
                                            <h4>Stay Connected</h4>
                                            <p>Never miss out on events that keep you close to campus life. </p>
                                        </div>
                                    </div>
                                </section>
                                <section className=" container right">
                                    <img src={Images3} alt="image3" />
                                    <div className="content_background">
                                        <div className="write">
                                            <h4>Build Friendships</h4>
                                            <p>Create lasting bonds by sharing experiences at campus gatherings.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="purpose_content_contain">
                                <section className="container right">
                                    <img src={Images4} alt="image4" />
                                    <div className="content_background">
                                        <div className="write">
                                            <h4>Discover Opportunities</h4>
                                            <p>Find workshops, talks, and events that help you grow.</p>
                                        </div>
                                    </div>
                                </section>
                                <section className=" container left">
                                    <img src={Images5} alt="image5" />
                                    <div className="content_background">
                                        <div className="write">
                                            <h4>Celebrate Together</h4>
                                            <p>Enjoy moments that strengthen unity and school pride.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}



const mapStateWithReduxStorage = (state) => {
    return {
        event: state.event
    }
}


export default connect(mapStateWithReduxStorage)(LandingPage)