import React from "react"
import ServiceItem from "../components/ServiceItem"
import { useStaticQuery, graphql } from "gatsby"

function Services() {
  const { allServicesYaml } = useStaticQuery(graphql`
    {
      allServicesYaml {
        edges {
          node {
            title
            src
            text
          }
        }
      }
    }
  `)
  return (
    <div id = "services" className="container-fluid" style={{ marginTop: "3em", backgroundColor: "#f8f9f9"}}>
      <div className="container">
        <div className="flexbox">
          <div className="row">
            {allServicesYaml.edges.map(({ node }) => {
              return <ServiceItem title={node.title} src={node.src} text={node.text} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
