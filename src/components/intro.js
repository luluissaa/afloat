import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Introduction = ({ siteIntro }) => (
    <div className="container">
      <div className="wrapper">
          <div className="intro">
            <h1>My name is Luisa Ji. I work with people who want to see old things in new ways and imagine possibilities yet to be realized.</h1>
            <Link to="/about/">read more</Link>
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
