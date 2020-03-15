import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"

const SecondPage = () => (
  <Layout>
<div className="container">

<div className="projects">
<div>
  <h1>Blah Blah Blah</h1>
  <h2>Category</h2>
  <p>Description</p>
  <a href="">link</a>
</div>
<div>
  <h1>Project Name</h1>
  <h2>Category</h2>
  <p>Description</p>
</div>
<div>
  <h1>Project Name</h1>
  <h2>Category</h2>
  <p>Description</p>
</div>
<div>
  <h1>Project Name</h1>
  <h2>Category</h2>
  <p>Description</p>
</div>
<div>
  <h1>Project Name</h1>
  <h2>Category</h2>
  <p>Description</p>
</div>
</div>

    <nav>
      <Link to="//">home</Link>
    </nav>
</div>

  </Layout>
)

export default SecondPage
