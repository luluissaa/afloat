import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Introduction = ({ siteIntro }) => (
    <div className="container">
      <div className="intro">
          <div>
            <h1>Luisa Ji is an explorer of all things curious. She works with people who wants to see old things in new ways and imagine possibilities yet to be realized.</h1>
          </div>
    </div>
    </div>
)

Introduction.propTypes = {
  siteIntro: PropTypes.string,
}

Introduction.defaultProps = {
  siteIntro: ``,
}

export default Introduction
