import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteFooter }) => (
  <footer>
    <p>© {new Date().getFullYear()} AfloatingSpace </p>
          <p><a href="https://www.gatsbyjs.org">luisa@afloating.space</a></p>
          <p><a href="https://www.gatsbyjs.org">@luisalyji twitter</a></p>
          <p><a href="https://www.gatsbyjs.org">@luisalyji instagram</a></p>
  </footer>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
