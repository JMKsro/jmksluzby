import React from "react"
import Fade from "react-reveal/Fade"

function ServiceItem({ src, title, text }) {
  return (
    <Fade bottom>
      <div className="col-lg-5 col-sm-12 service-item">
        <img src={src} width="64px" class="service-icon"/>
        <h4 className="mt-5" style={{fontFamily: "Raleway, Helvetica, Arial, sans-serif", fontWeight: "600"}}>{title}</h4>
        <p>
     {text.map(item=><li class="service-text">{item}</li>)}
          
        </p>
      </div>
    </Fade>
  )
}

export default ServiceItem
