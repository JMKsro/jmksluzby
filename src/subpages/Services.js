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
            icon
            text
          }
        }
      }
    }
  `)
  return (
    <div id = "services" className="container-fluid" style={{ marginTop: "5.5em" }}>
      <div className="container">
        <div className="flexbox">
          <div className="row">
            {allServicesYaml.edges.map(({ node }) => {
              return <ServiceItem title={node.title} icon={node.icon} text={node.text} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
