import React from "react"

import Nav from "./nav"
import Footer from "./footer"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__heading">CSS Cheatsheet</h1>
      <Nav />
      <Footer />
    </aside>
  )
}

export default Sidebar