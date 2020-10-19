import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Cell from "../components/portfolio"
import portfoliodata from "../../portfoliodata.json"
import nnn from "../images/nnncover.png"


const ProjectPage = () => (
  <Layout>
    
<div className="container">
<Cell>
  
</Cell>
{/* 
{portfoliodata.cells.map(cell => (
  <Cell 
  title={cell.title}
  image={cell.image}
  category={cell.category}
  description={cell.description}
  url={cell.url}
  urlname={cell.urlname}
  />
))}
*/}

    <nav>
      <Link to="//">home</Link>
    </nav>
</div>

  </Layout>
)

export default ProjectPage
