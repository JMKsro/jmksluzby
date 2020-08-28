import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#7E57C2", color: "white" }}
    >
      <div className="container">
        <form name="contact" method="POST" data-netlify="true" className="flexbox">
        <input type="hidden" name="form-name" value="contact" />
            <h1 className="text-center my-5">Kontaktujte nás</h1>
            <div className="row my-4">
              <div className="col-lg-6 mb-4">
                <input
                  type="email"
                  name="email"
                  className="inputBox"
                  placeholder="Váš email"
                  required
                />
              </div>
              <div className="col-lg-6 mb-4">
                <input
                  type="text"
                  name="subject"
                  className="inputBox"
                  placeholder="Předmět zprávy"
                  required
                />
              </div>
            </div>
            <textarea name="body" rows = "2" className="inputBox mb-4" placeholder="Vaše zpráva" required/>
            <button type="submit" className="btn btn-light mb-4 py-3">
              Odeslat
            </button>
        </form>
      </div>
    </div>
  )
}
