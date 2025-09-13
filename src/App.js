import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component/Scroll_to_top";
import LandingPage from "./Pages/Landing";
import AboutUs from "./Pages/About_us";
import Contact from "./Pages/contact";
import Registration from "./Pages/register/Registration";
import Dashbaord from "./Pages/dashboard";
import Event from "./Pages/event";
import Gallery from "./Pages/gallery";
import EventDescription from "./Pages/event_description";
import GalleryAlbum from "./Pages/gallery_album";




function App() {

    return (
      <BrowserRouter>
        <>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/register" element={<Registration />} />
              <Route exact path="/dashboard" element={<Dashbaord />} />
              <Route exact path="/event" element={<Event />} />
              <Route exact path="/event/:id/:title" element={<EventDescription />} />
              <Route exact path="/gallery" element={<Gallery />} />
              <Route exact path="/gallery/:id/:title" element={<GalleryAlbum />} />
            </Routes>
          </ScrollToTop>
        </>
      </BrowserRouter>
    );

}

export default App;
