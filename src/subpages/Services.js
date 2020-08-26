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
          }
        }
      }
    }
  `)
  return (
    <div id = "services" className="container-fluid">
      <div className="container">
        <div className="flexbox">
          <div className="row">
            {allServicesYaml.edges.map(({ node }) => {
              return <ServiceItem title={node.title} src={node.src} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
