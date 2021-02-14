import React from "react"
import "../global.css"
import Navbar from "../components/Navbar";
import ServicesPage from "../subpages/ServicesPage";
import End from "../subpages/End";
import Footer from "../components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faPhone, faEnvelope, faIdCard, faPoll, faLaptop, faMobileAlt, faHandHoldingUsd, faBeer, faLaptopHouse, faLightbulb } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faPhone, faEnvelope, faIdCard, faPoll, faLaptop, faMobileAlt, faHandHoldingUsd, faBeer, faLaptopHouse, faLightbulb )

export default function Index({data}) {
  const { allMarkdownRemark } = data
  return (
    <div>
      <Navbar/>
      <ServicesPage data={allMarkdownRemark}/>
      <End/>
      <Footer/>
    </div>
  )
}

export const servicesPageQuery = graphql`
query ServicesPage {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          slug
          template
          title
          services {
            icon
            text
            title
          }
        }
      }
    }
  }
}
`