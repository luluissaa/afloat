import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container">

    <div className="intro">
    <div>
    <h1>Luisa Ji is an explorer of all things curious. She works with people who wants to see old things in new ways and imagine possibilities they’ve never thought of before.</h1>
    <Link to="/about/">Read more</Link>

    </div>
  
    </div>

    <div className="sidepanel">
      <div className="sidepanel1">
        <h2>Make things & Do good work</h2>
        <p>design / digital products / social impact</p>
        <h1>Nomadic Labs</h1>
      </div>
      <div className="sidepanel2">
        <h2>Thinking & Tinkering</h2>
        <p>cultures / futures /creative strategy</p>
        <h1>UKAI Projects</h1>
        <h1>Design Futures Initiative</h1>
      </div>
      <div className="sidepanel3">
        <h2>Embracing the Weird</h2>
        <p>images / interviews / collaborative speculations</p>
        <h1>Thoughtful & Peculiar</h1>
      </div>
      <div className="sidepanel4">
        <h2>Community</h2>
        <p>events</p>
        <h1>Speculative Futures Ottawa</h1>
        <h1>Ladies Wine & Design Ottawa</h1>
      </div>
    </div>
    <nav>
        <Link to="/projects/">projects</Link>
      </nav>
    </div>
    
  </Layout>
)

export default IndexPage
