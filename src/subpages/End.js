import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhone, faEnvelope, faPoll, faIdCard } from '@fortawesome/free-solid-svg-icons'

export default function End() {
  return (
    <div
      id="contact"
      className="container-fluid"
      style={{ backgroundColor: "#f8f9f9" }}
    >
      <div className="container contact">
        <div class="my-4"><h1 className="text-center my-2">Kontaktujte nás</h1></div>
        <div class="row">
          <div class="col-lg-6">
            <form name="contact" method="POST" data-netlify="true" className="flexbox">
              <input type="hidden" name="form-name" value="contact" />
              <div className="row my-2">
                <input
                  type="email"
                  name="email"
                  className="inputBox"
                  placeholder="Váš email"
                  required
                />
              </div>
              <div className="row my-2">
                <input
                  type="text"
                  name="subject"
                  className="inputBox"
                  placeholder="Předmět zprávy"
                  required
                />
              </div>
              <div className="row my-2">
                <textarea name="body" rows="2" className="inputBox mb-4" placeholder="Vaše zpráva" required />
              </div>
              <div className="row my-2">
                <button type="submit" className="btn btn-primary mb-4">
                  Odeslat
              </button>
              </div>
            </form>
          </div>
          <div class="col-lg-6 my-4">
              <div class="row address-header"><h3>JMK služby s. r. o.</h3></div>
              <div class="row address-contact">
                <FontAwesomeIcon className="mx-2" icon="map-marker-alt" /> Vojtěchov 150, 539 01 Hlinsko
              </div>
              <div class="row address-contact">
                  <FontAwesomeIcon className="mx-2" icon="phone" /> +420 722 016 026
              </div>
              <div class="row address-contact">
                  <FontAwesomeIcon className="mx-2" icon="envelope" /> <a href="mailto:jmk@jmksluzby.cz">jmk@jmksluzby.cz</a>
              </div>
              <div class="row address-contact">
                  <FontAwesomeIcon className="mx-2" icon="id-card" /> IČO: 08494436
              </div>
              <div class="row address-contact">
                  <FontAwesomeIcon className="mx-2" icon="poll" /> DIČ: CZ08494436
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
