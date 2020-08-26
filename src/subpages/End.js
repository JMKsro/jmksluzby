import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#7E57C2", color: "white" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Kontaktujte nás</h1>
            <div className="row my-4">
              <div className="col-lg-6 mb-4">
                <input
                  type="name"
                  className="inputBox"
                  placeholder="Vaše jméno"
                />
              </div>
              <div className="col-lg-6 mb-4">
                <input
                  type="email"
                  className="inputBox"
                  placeholder="Váš email"
                />
              </div>
            </div>
            <textarea rows = "2" className="inputBox mb-4" placeholder="Vaše zpráva" />
            <button className="btn btn-light mb-4 py-3">
              Odeslat
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}
