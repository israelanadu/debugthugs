import React, { Component } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { BiLogoGmail } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";
import { BiSolidBuildings } from "react-icons/bi";
import { FaCheckDouble } from "react-icons/fa6";
import Image from "../asset/image/contactimg.jpg"


class Contact extends Component {
    state ={

    }

    handleInput = (event) =>{
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <>
                <Header />
                <div className="About_main_container">
                    <img src={Image} alt="contact" />
                    <div className="container_content">
                        <h1>Contact Us</h1>
                        <p>We’d love to connect! Reach out to our wonderful team for help, feedback, or just to say hello.</p>
                    </div>
                </div>


                <div className="contact_form_container">
                    <div className="form_cover">
                        <div className="background_color"></div>
                        <section className="contain">
                            <h3>Let’s Connect</h3>
                            <p>Have a question or feedback? Fill out the form and we’ll get back to you shortly.</p>
                            <form>
                                <input type="text" name="full_name" id="full_name" value={this.state.full_name}  onChange={this.handleInput} placeholder="John Doe"/><br/>
                                <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInput}  placeholder="johndoe@gmail.com"/><br/>
                                <input type="number" name="phone" id="phone" value={this.state.phone} onChange={this.handleInput} placeholder="09000000"/><br/>
                                <textarea type= "text" name="description" id="description" value={this.state.description} onChange={this.handleInput} placeholder="Narration" /><br/>
                                <button>Send</button>
                            </form>
                        </section>
                        <section className="contain">
                            <div className="info_contain">
                                <h4>Info</h4>
                                <li><BiLogoGmail /> israelanadu8@gmail.com</li>
                                <li><MdPhoneInTalk /> 09012503350</li>
                                <li><BiSolidBuildings /> 9 John Does Street </li>
                                <li><FaCheckDouble /> Available 24/7</li>
                            </div>
                        </section>
                    </div>

                </div>

                <Footer />
            </>
        )
    }
}


export default Contact