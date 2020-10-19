import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Aside from "../components/aside"

const SecondPage = () => (
  <Layout>
<div className="container">

      <div className="intro">
            <div>
            <h1>about</h1>
            <p>Luisa is a Chinese-Canadian creative strategist, designer-futurist, and artist with the approach of an architect and the eyes of a photographer. Her work span disciplines including art, architecture, culture, and how to visualize and make sense of the future. With broad interests and curiosity, Luisa worked on projects focused on digitally-mediated civic engagement, participatory urban design, and performative work based on spatial interactions alongside artists, architects, and socially-engaged designers in New Caledonia, U.S., and Canada. Luisa holds a master's degree in Architecture and is the global community director of Speculative Futures, a network of designer-futurists and foresight practitioners in 40+ cities worldwide using their creative practices to activate social change.
            </p>
            <p><a href="https://www.notion.so/4ac8a95f06ca411c82cd87ddf933f2e3?v=58e8002b251542968d5a396bc1e7d6ac" target="_blank" rel="noopener noreferrer">cv & headshots</a></p>
            <div>
            </div>
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
