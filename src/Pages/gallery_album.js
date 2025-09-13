import React from "react";
import { useParams } from "react-router-dom"; // ✅ import useParams
import DashMenu from "../Component/dash_menu";
import DashHeader from "../Component/dash_header";
import { connect } from "react-redux";

const GalleryAlbum = ({ events }) => {
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
                    <div className="dash_contain">
                        <div className="dash_head">
                            <h3>Good Day Israel Anadu</h3>
                            <p>Photos taken on the event</p>
                        </div>

                        {event.gallery && event.gallery.length > 0 ? (
                            <div className="descrip_side_container">
                                <section
                                    className="decript_content large"
                                    style={{ width: "100%" }}
                                >
                                    <h4>Event Gallery</h4>
                                    <div className="contain galleries">
                                        {event.gallery.map((item) => (
                                            <img
                                                key={item.id}
                                                src={item.img}
                                                alt={`Event photo ${item.id}`}
                                            />
                                        ))}
                                    </div>
                                </section>
                            </div>
                        ) : (
                            <div className="descrip_side_container">
                                <p>Event has not been held</p>
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

export default connect(mapStateWithReduxStorage)(GalleryAlbum);
