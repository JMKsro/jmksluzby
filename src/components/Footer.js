import React from "react"
import { SocialIcon } from "react-social-icons"

function Footer() {
  return (
    <div>
      <footer className="py-2" style={{ backgroundColor: "#222222" }}>
        <div className="container">
  <p style={{ textAlign: "center" }}>JMK služby s. r. o. | © Copyright {new Date().getFullYear()}</p>          
        </div>
      </footer>
    </div>
  )
}

export default Footer
