import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Aside from "../components/aside"

const SecondPage = () => (
  <Layout>
<div className="container">

      <div className="intro">
            <div>
            <p>Luisa Ji is a Chinese-Canadian designer. Her work spans creative direction, digital strategy, digital products, and visual design. With a strong sense of curiosity, her approach to designing and organizing digital interactions draws from patterns from her experiences in architecture, urban studies, and Chinese vernacular knowledge. She worked on projects focused on digitally-mediated civic engagement, participatory urban design, and performative works based on spatial interactions alongside artists, architects, cultural initiatives, and municipal departments. Her work was featured in Architecture Concordia, City of Ottawa Urban Design Awards, Ottawa Architecture Week, World Design Summit Montreal, NOW Magazine and more. Luisa holds a master's degree in Architecture from Carleton University, Ottawa. Upon completing her professional training and internships abroad, she took a plunge into pursuing digital design and UX research at the Government of Canada Treasury Board Secretariat while working on building her own ventures outside of the 9-5. Through trial and error, she developed her own palette of tactics to brave the uncertainties of entrepreneurship in the creative industry.</p>
            <p>In 2018, Luisa co-founded Nomadic Labs, a digital studio, working with community groups, social impact organizations, and non-profits globally on digital solutions through the lens of design ethics and digital equity. </p>
            <p>As a community-builder, Luisa is currently the Global Chapters Director of Speculative Futures, a program of the Design Futures Initiative, supporting and facilitating meaningful conversations to connect an amalgamation of educators, designers, futurists, and foresight strategists in 50+ cities across 6 continents.</p>
            <div>
            </div>
            <a href="https://www.notion.so/4ac8a95f06ca411c82cd87ddf933f2e3?v=58e8002b251542968d5a396bc1e7d6ac" target="_blank" rel="noopener noreferrer">cv/press photos</a>

            </div>
            <Link to="/">back</Link>
      </div>

      <nav>
      </nav>
</div>

  <Aside />
  <nav>
        <Link to="/projects/">projects</Link>
      </nav>
  </Layout>
)

export default SecondPage
