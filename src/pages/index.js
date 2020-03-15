import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Aside from "../components/aside"
import Introduction from "../components/intro"

import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <Introduction />
    <Aside />
      <nav>
        <Link to="/projects/">projects</Link>
      </nav>
  </Layout>


)


export default IndexPage
