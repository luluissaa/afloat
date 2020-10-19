import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteFooter }) => (
  <footer>
    <p>© {new Date().getFullYear()} AfloatingSpace </p>
          <p>luisa[~at~]afloating.space</p>
          <p><a href="https://www.twitter.com/luisalyji" target="_blank" rel="noopener noreferrer">@luisalyji twitter</a></p>
          <p><a href="https://www.instagram.com/luisalyji" target="_blank" rel="noopener noreferrer">@luisalyji instagram</a></p>
  </footer>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
