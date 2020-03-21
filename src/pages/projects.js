import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cell from "../components/portfolio"
import portfoliodata from "../../portfoliodata.json"


const SecondPage = () => (
  <Layout>
    
<div className="container">
<div className="projects">

{portfoliodata.cells.map(cell => (
  <Cell 
  title={cell.title}
  category={cell.category}
  description={cell.description}
  image={cell.image}
  url={cell.url}
  urlname={cell.urlname}
  />
))}

</div>

    <nav>
      <Link to="//">home</Link>
    </nav>
</div>

  </Layout>
)

export default SecondPage
