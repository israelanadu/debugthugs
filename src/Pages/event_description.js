import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import DashMenu from "../Component/dash_menu";
import DashHeader from "../Component/dash_header";
import { GoDotFill } from "react-icons/go";
import Rating from "../Component/rating";

const EventDescription = ({ events }) => {
    const { id } = useParams(); // get the event id from URL

    // filter the event by id (ensure both are numbers)
    const event = events.find((e) => Number(e.id) === Number(id));

    // handle case when event is not found
    if (!event) {
        return (
            <>
                <DashHeader />
                <div className="dash_body_container">
                    <DashMenu />
                    <div className="dash_content_container">
                        <p>Event not found.</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <DashHeader />
            <div className="dash_body_container">
                <DashMenu />
                <div className="dash_content_container">
                    <div className="description_main_container">

                        <div className="description_body_cover">
                            <img src={event.thumbnails} alt={`image ${event.id}`}/>
                            <div className="description_content">
                                <h2>{event.title}</h2>
                                <div className="info">
                                    <p>{event.date}</p> <GoDotFill /> <p>{event.time}</p>
                                </div>
                            </div>
                        </div>

                        <div className="descrip_side_container">
                            <section className="decript_content large">
                                <h4>Event Description</h4>
                                <p>{event.description}</p>
                            </section>
                            <section className="decript_content small">
                                <h4>Event Venue</h4>
                                <div className="contain">
                                    <iframe
                                        src={event.location}
                                        title="geoinfotech"
                                        width="100%"
                                        height="200"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </section>
                        </div>

                        <div className="descrip_side_container">
                            <section className="decript_content" style={{ width: "100%" }}>
                                <h4>Event Feedback</h4>
                                <div className="contain">
                                    <Rating rating={event.feedback} />
                                </div>
                            </section>
                        </div>

                        {event.gallery && event.gallery.length > 0 && (
                            <div className="descrip_side_container">
                                <section className="decript_content large" style={{ width: "100%" }}>
                                    <h4>Event Gallery</h4>
                                    <div className="contain galleries">
                                        {event.gallery.map((item) => (
                                            <img
                                                key={item.id}
                                                src={item.img}
                                                alt={`Event gallery item ${item.id}`}
                                               
                                            />
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateWithReduxStorage = (state) => {
    return {
        events: state.event, // rename prop to events because it's an array
    };
};

export default connect(mapStateWithReduxStorage)(EventDescription);
