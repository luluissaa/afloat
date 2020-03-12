/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <div>
        <main>{children}</main>
      </div>

      <footer>
          <p>© {new Date().getFullYear()} AfloatingSpace </p>
          <p><a href="https://www.gatsbyjs.org">luisa@afloating.space</a></p>
          <p><a href="https://www.gatsbyjs.org">@luisalyji twitter</a></p>
          <p><a href="https://www.gatsbyjs.org">@luisalyji instagram</a></p>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
