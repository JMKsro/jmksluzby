import React from "react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ServiceItem({ icon, title, text }) {
  return (
    <Fade bottom>
      <div className="col-lg-5 col-sm-12 service-item">
        <FontAwesomeIcon className="service-icon" size="2x" icon={icon} />
        <h6 className="mt-3 mx-2 text-left" style={{fontFamily: "Raleway, Helvetica, Arial, sans-serif", fontWeight: "600"}}>{title}</h6>
        <p>
     {text.map(item=><li class="service-text">{item}</li>)}
        </p>
      </div>
    </Fade>
  )
}

export default ServiceItem
