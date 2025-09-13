import React, { Component } from "react";
import DashHeader from "../Component/dash_header";
import "./dash.css"
import DashMenu from "../Component/dash_menu";
import { MdSupportAgent } from "react-icons/md";
import { connect } from "react-redux"
import {Link} from "react-router-dom"


class Dashbaord extends Component {
    filterByStatus = (value) => {
        const event = this.props.event;
        return event.filter((item) =>
            String(item.status).toLowerCase().includes(String(value).toLowerCase())
        );
    };
    render() {
        const event = this.props.event || [];

        function slugify(text) {
            return text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with -
                .replace(/^-+|-+$/g, '');   // trim dashes
        }
        const eventList = event.length > 0 ? event.map(list => {
            return (
                <Link to={`/event/${list.id}/${slugify(list.title)}`}>
                    <li key={list.id}>
                        <p className="long">{list.title}</p>
                        <p className={`short ${list.status === "past" ? "red" : "green"}`}>{list.status}</p>
                    </li>
                </Link>
            )
        }) : (
            <li>
                <p className="long">No event or something went wrong</p>
            </li>
        )


        const gallarylist = this.filterByStatus("past").length > 0 ? this.filterByStatus("past").map(list => {
            return (
                <Link to={`/gallery/${list.id}/${slugify(list.title)}`}>
                    <li key={list.id}>
                        <p className="long">{list.title} </p>
                    </li>
                </Link>
            )
        }) : (
            <li>
                <p className="long">No event or something went wrong</p>
            </li>
        )
        return (
            <div className="dashboard">
                <DashHeader />
                <div className="dash_body_container">
                    <DashMenu />
                    <div className="dash_content_container">
                        <div className="dash_contain">
                            <div className="dash_head">
                                <h3>Good Day Israel Anadu</h3>
                                <p>Welcome to Campus Connect, one stop from event information</p>
                            </div>

                            <div className="dash_record_container">
                                <nav className="record_contain">
                                    <h4>
                                        {event.length}
                                        <br />
                                        <span>Total Event</span>
                                    </h4>
                                </nav>
                                <nav className="record_contain">
                                    <h4>
                                        {this.filterByStatus("past").length}
                                        <br />
                                        <span>Past Event</span>
                                    </h4>
                                </nav>
                                <nav className="record_contain">
                                    <h4>
                                        {this.filterByStatus("upcoming").length}
                                        <br />
                                        <span>Upcoming Event</span>
                                    </h4>
                                </nav>
                            </div>


                            <div className="dash_table_container">
                                <section className="dash_contain">
                                    <div className="side_dash_table_cover">
                                        <div className="dash_cover">
                                            <h3>Event Lists</h3>
                                            <p>Stay updated with active Event coming up </p>
                                            <div className="table_list">

                                                {/* <li>
                                                    <p className="long">Welcome to Campus Connect, one stop from event information </p>
                                                    <p className="short green">upcoming</p>
                                                </li> */}
                                                {eventList}

                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <section className="dash_contain">
                                    <div className="side_dash_table_cover">
                                        <div className="dash_cover small">
                                            <h3>Gallary List</h3>
                                            <p>View our old event </p>
                                            <div className="table_list">

                                                {/* <li>
                                                    <p className="long">Welcome to Campus Connect, one stop from event information </p>
                                                </li> */}
                                                {gallarylist}

                                            </div>
                                        </div>
                                    </div>


                                    <div className="side_dash_table_cover box">
                                        <div className="dash_cover small">
                                            <MdSupportAgent />
                                            <h3>Customer Care</h3>
                                            <button>Reach out</button>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateWithReduxStorage = (state) => {
    return {
        event: state.event
    }
}



export default connect(mapStateWithReduxStorage)(Dashbaord) 