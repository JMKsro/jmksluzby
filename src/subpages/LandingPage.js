import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"

export const LandingPageTemplate = ({
  welcomeText, 
  landingText
}) => (
    <section id = "home" className = "container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <h6>{welcomeText}</h6>
          <h1>{landingText}</h1>
        </div>
      </div>
    </section>
  )

const LandingPage = ({ data: { pageDataYaml } }) => (
    <LandingPageTemplate {...pageDataYaml} />
)

export default LandingPage

export const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)