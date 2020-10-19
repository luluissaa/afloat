import PropTypes from "prop-types"
import React from "react"

const Aside = ({ siteAside }) => (
    <aside className="sidepanel">

<div className="sidepanel3">
      <h2>Current Affiliations:</h2>
    </div>

    <div className="sidepanel1">
      <h2>Make things & Do good work</h2>
      <p>design / digital products / social impact</p>
      <a href="https://www.nomadiclabs.ca" target="_blank" rel="noopener noreferrer"><h1>Nomadic Labs</h1></a>
    </div>

    <div className="sidepanel2">
      <h2>Thinking & Tinkering</h2>
      <p>cultures / futures /creative strategy</p>
      <a href="https://www.ukai.ca" target="_blank" rel="noopener noreferrer"><h1>UKAI Projects</h1></a>
      <a href="https://www.futures.design" target="_blank" rel="noopener noreferrer"><h1>Design Futures Initiative</h1></a>

    </div>

    <div className="sidepanel4">
      <h2>Community</h2>
      <p>events</p>
      <a href="https://www.instagram.com/futures_ottawa" target="_blank" rel="noopener noreferrer"><h1>Speculative Futures Ottawa</h1></a>
      <a href="https://www.instagram.com/lwd_ottawa" target="_blank" rel="noopener noreferrer"><h1>Ladies Wine & Design Ottawa</h1></a>

    </div>
  </aside>
)

Aside.propTypes = {
  siteAside: PropTypes.string,
}

Aside.defaultProps = {
  siteAside: ``,
}

export default Aside
