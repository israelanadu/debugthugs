import React, { Component, createRef } from "react";
import DashHeader from "../Component/dash_header";
import "./dash.css"
import DashMenu from "../Component/dash_menu";
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { connect } from "react-redux"
import {Link} from "react-router-dom"



class Event extends Component {
    state = {
        dropdown: null,
        sort: "Sort By",
        category: "Select Category"
    }
    dropdownRefs = {};

    getDropdownRef = (name) => {
        if (!this.dropdownRefs[name]) {
            this.dropdownRefs[name] = createRef();
        }
        return this.dropdownRefs[name];
    };



    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleDropDown = (value) => {
        this.setState((prev) => ({
            dropdown: prev.dropdown === value ? null : value
        }))
    }
    handleClickOutside = (event) => {
        const { dropdown } = this.state;
        if (!dropdown) return;

        const ref = this.dropdownRefs[dropdown];
        if (ref?.current && !ref.current.contains(event.target)) {
            this.setState({ dropdown: null });
        }
    };

    handleFilter = (value, type) => {
        let newValue = value;

        if (value === "") {
            newValue = type === "category" ? "Select Category" : "Sort By";
        }

        this.setState({
            [type]: newValue,
            dropdown: null
        });
    };


    filterByCategory = () => {
        const event = this.props.event || [];
        const { category } = this.state;

        if (category === "Select Category") {
            return event; // return all if default
        }

        return event.filter((item) =>
            String(item.category).toLowerCase().includes(category.toLowerCase())
        );
    };

    //   filterByCategory = () => {
    //     const event = this.filterByCategory()  || [];
    //     const { sort } = this.state;

    //     if (category === "Select Category") {
    //       return event; // return all if default
    //     }

    //     return event.filter((item) =>
    //       String(item.category).toLowerCase().includes(category.toLowerCase())
    //     );
    //   };



    render() {
        const { dropdown, sort, category } = this.state

        function slugify(text) {
            return text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with -
                .replace(/^-+|-+$/g, '');   // trim dashes
        }
        const eventList = this.filterByCategory().length > 0 ? this.filterByCategory().map(list => {
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

        return (
            <div className="dashboard">
                <DashHeader />
                <div className="dash_body_container">
                    <DashMenu />
                    <div className="dash_content_container">
                        <div className="dash_contain">
                            <div className="dash_head">
                                <h3>Event List</h3>
                                <p>Stay updated with active Event coming up </p>
                            </div>

                            <div className="dash_record_container">
                                <p><IoFilter /> Filter</p>
                                <div className="filter_cover">
                                    <section className="filter_contain" ref={this.getDropdownRef("sort")}>
                                        <button onClick={() => this.handleDropDown("sort")}>{sort}<FaAngleDown /></button>
                                        {dropdown === "sort" ?
                                            <div className="submenu_cover">
                                                <li onClick={() => this.handleFilter("", "sort")}>Sort By</li>
                                                <li onClick={() => this.handleFilter("Upcoming", "sort")}>Upcoming</li>
                                                <li onClick={() => this.handleFilter("Most Recent", "sort")}>Most Recent</li>
                                                <li onClick={() => this.handleFilter("Alphabetical", "sort")}>Alphabetical (Ass)</li>
                                            </div> : null}
                                    </section>
                                    <section className="filter_contain" ref={this.getDropdownRef("category")}>
                                        <button onClick={() => this.handleDropDown("category")}>{category} <FaAngleDown /></button>
                                        {dropdown === "category" ?
                                            <div className="submenu_cover">
                                                <li onClick={() => this.handleFilter("", "category")}>All</li>
                                                <li onClick={() => this.handleFilter("Academy", "category")}>Academic Events</li>
                                                <li onClick={() => this.handleFilter("Cultural", "category")}>Cultural Events</li>
                                                <li onClick={() => this.handleFilter("Department", "category")}>Departmental Events</li>
                                                <li onClick={() => this.handleFilter("Sports", "category")}>Sports Events</li>
                                            </div> : null
                                        }
                                    </section>
                                </div>
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




export default connect(mapStateWithReduxStorage)(Event) 