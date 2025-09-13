import React, { Component } from "react";
import DashHeader from "../Component/dash_header";
import "./dash.css"
import DashMenu from "../Component/dash_menu";
import { connect } from "react-redux"
import { Link } from "react-router-dom"



class Gallery extends Component {

    filterByCategory = (value) => {
        const event = this.props.event || [];

        if (!value || value === "Select Category") {
            return event; // return all if default
        }

        return event.filter((item) =>
            item.category && item.category.toLowerCase().includes(value.toLowerCase())
        );
    };
    render() {
        function slugify(text) {
            return text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with -
                .replace(/^-+|-+$/g, '');   // trim dashes
        }

        const gallaryListAcademy = this.filterByCategory("Academy").length > 0 ? this.filterByCategory("Academy").map(list => {
            return (
                <Link to={`/gallery/${list.id}/${slugify(list.title)}`}>
                    <section className="gallery_card">
                        <img src={list.thumbnails} alt="gallary" />
                        <div className="card_info">
                            <h5>{list.title}</h5>
                            <p>{list.date}</p>
                        </div>
                    </section>
                </Link>
            )
        }) : (
            <section className="gallery_card">
                <div className="card_info">
                    <h5>No data</h5>
                </div>
            </section>
        )
        const gallaryListCultural = this.filterByCategory("Cultural").length > 0 ? this.filterByCategory("Cultural").map(list => {
            return (
                <Link to={`/gallery/${list.id}/${slugify(list.title)}`}>
                    <section className="gallery_card">
                        <img src={list.thumbnails} alt="gallary" />
                        <div className="card_info">
                            <h5>{list.title}</h5>
                            <p>{list.date}</p>
                        </div>
                    </section>
                </Link>
            )
        }) : (
            <section className="gallery_card">
                <div className="card_info">
                    <h5>No data</h5>
                </div>
            </section>
        )

        const gallaryListDepartmental = this.filterByCategory("Departmental").length > 0 ? this.filterByCategory("Departmental").map(list => {
            return (
                <Link to={`/gallery/${list.id}/${slugify(list.title)}`}>
                    <section className="gallery_card">
                        <img src={list.thumbnails} alt="gallary" />
                        <div className="card_info">
                            <h5>{list.title}</h5>
                            <p>{list.date}</p>
                        </div>
                    </section>
                </Link>
            )
        }) : (
            <section className="gallery_card">
                <div className="card_info">
                    <h5>No data</h5>
                </div>
            </section>
        )



        const gallaryListSports = this.filterByCategory("Sports").length > 0 ? this.filterByCategory("Sports").map(list => {
            return (
                <Link to={`/gallery/${list.id}/${slugify(list.title)}`}>
                    <section className="gallery_card">
                        <img src={list.thumbnails} alt="gallary" />
                        <div className="card_info">
                            <h5>{list.title}</h5>
                            <p>{list.date}</p>
                        </div>
                    </section>
                </Link>
            )
        }) : (
            <section className="gallery_card">
                <div className="card_info">
                    <h5>No data</h5>
                </div>
            </section>
        )



        return (
            <div className="dashboard">
                <DashHeader />
                <div className="dash_body_container">
                    <DashMenu />
                    <div className="dash_content_container">
                        <div className="dash_contain">
                            <div className="dash_head">
                                <h3>Gallery List</h3>
                                <p>Explore a curated collection of event highlights</p>
                            </div>

                            <div className="dash_gallery_container">
                                {this.filterByCategory("Academy").length > 0 &&
                                    <section className="gallery_contain">
                                        <h4>Academy Gallery</h4>
                                        <div className="folder_contain">
                                            {gallaryListAcademy}
                                        </div>
                                    </section>
                                }

                                {this.filterByCategory("Cultural").length > 0 &&
                                    <section className="gallery_contain">
                                        <h4>Cultural Gallery</h4>
                                        <div className="folder_contain">

                                            {gallaryListCultural}
                                        </div>
                                    </section>}

                                {this.filterByCategory("Departmental").length > 0 &&
                                    <section className="gallery_contain">
                                        <h4>Departmental Gallery</h4>
                                        <div className="folder_contain">

                                            {gallaryListDepartmental}
                                        </div>
                                    </section>
                                }

                                {this.filterByCategory("Sports").length > 0 &&
                                    <section className="gallery_contain">
                                        <h4>Sports Gallery</h4>
                                        <div className="folder_contain">
                                            {/* <section className="gallery_card">
                                            <div className="card_info">

                                            </div>
                                        </section>
                                        <section className="gallery_card">
                                            <div className="card_info">

                                            </div>
                                        </section>
                                        <section className="gallery_card">
                                            <div className="card_info">

                                            </div>
                                        </section> */}
                                            {gallaryListSports}
                                        </div>
                                    </section>
                                }


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


export default connect(mapStateWithReduxStorage)(Gallery) 