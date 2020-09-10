import React from "react"
import "../global.css"
import Navbar from "../components/Navbar";
import Services from "../subpages/Services";
import End from "../subpages/End";
import Footer from "../components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faPhone, faEnvelope, faIdCard, faPoll, faLaptop, faMobileAlt, faHandHoldingUsd, faBeer, faLaptopHouse, faLightbulb } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faPhone, faEnvelope, faIdCard, faPoll, faLaptop, faMobileAlt, faHandHoldingUsd, faBeer, faLaptopHouse, faLightbulb )

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
