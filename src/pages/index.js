import React from "react"
import "../global.css"
import Navbar from "../components/Navbar";
import Services from "../subpages/Services";
import Team from "../subpages/Team";
import End from "../subpages/End";
import Footer from "../components/Footer";

function Index() {
  return (
    <div>
      <Navbar/>
      <Services/>
      <End/>
      <Footer/>
    </div>
  )
}

export default Index
