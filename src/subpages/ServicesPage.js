import React from "react"
import ServiceItem from "../components/ServiceItem"
import { graphql, StaticQuery } from "gatsby"

export default () => (
  <StaticQuery query={ graphql`
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
`}
  render={data => (<ServicesTemplate allServicesMarkdown={data.allMarkdownRemark} />)}/>
)

export const ServicesTemplate = ({
  allServicesMarkdown
}) => (
    <div id="services" className="container-fluid d-block" style={{ paddingTop: "5.5em" }}>
      <div className="container">
        <div className="flexbox">
          <div className="row center-align">
          {allServicesMarkdown.edges[0].node.frontmatter.services.map((node,index) => {
              return <ServiceItem key={index} title={node.title} icon={node.icon} text={node.text} />
            })}
          </div>
        </div>
      </div>
    </div>
  )