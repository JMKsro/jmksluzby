import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <AnchorLink class="navbar-brand brand-size" href="#services">JMK služby s. r. o. VOJTĚCHOV</AnchorLink>
      <button class="navbar-toggler toggler-size" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <AnchorLink class="nav-link" href="#services">
              Nabízíme
              </AnchorLink>
          </li>
          <li class="nav-item">
            <AnchorLink class="nav-link" href="#contact">
              Kontakt
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
