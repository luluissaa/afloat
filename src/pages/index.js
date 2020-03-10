import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>HELLO this is Luisa</h1>
    <p>Luisa Ji is a serious explorer of all things beautiful and future-forward. She helps people see old things in new ways and imagine possibilities they’ve never thought of before.</p>
    <Link to="/page-2/">Read more</Link>
  </Layout>
)

export default IndexPage
