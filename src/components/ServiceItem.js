import React from "react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ServiceItem({ icon, title, text }) {
  return (
    <Fade bottom>
      <div className="col-lg-5 col-sm-12 service-item">
        <FontAwesomeIcon className="service-icon" size="3x" icon={icon} />
        <h4 className="mt-5 text-center" style={{fontFamily: "Raleway, Helvetica, Arial, sans-serif", fontWeight: "600"}}>{title}</h4>
        <p>
     {text.map(item=><li class="service-text">{item}</li>)}
          
        </p>
      </div>
    </Fade>
  )
}

export default ServiceItem
