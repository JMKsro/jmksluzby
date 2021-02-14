import React from "react"
import ServiceItem from "../components/ServiceItem"

export const ServicesTemplate = ({
  services
}) => (
    <div id="services" className="container-fluid d-block" style={{ paddingTop: "5.5em" }}>
      <div className="container">
        <div className="flexbox">
          <div className="row center-align">
          {services.map((node,index) => {
              return <ServiceItem key={index} title={node.title} icon={node.icon} text={node.text} />
            })}
          </div>
        </div>
      </div>
    </div>
  )

  const ServicesPage = ( {data} ) => {
    return (
      <ServicesTemplate services={data.edges[0].node.frontmatter.services} /> 
    )
  }

  export default ServicesPage