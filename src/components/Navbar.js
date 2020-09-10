import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <AnchorLink class="navbar-brand brand-size" href="#services"><div class="mx-2 row font-weight-bold">JMK SLUŽBY S. R. O.</div><div class="mx-2 row h6">VOJTĚCHOV</div></AnchorLink>
      <button class="navbar-toggler toggler-size" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item">
            <AnchorLink class="nav-link" href="services">
              NABÍDKA
            </AnchorLink>
          </li>
          <li class="nav-item">
            <AnchorLink class="nav-link" href="#contact">
              KONTAKT
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
