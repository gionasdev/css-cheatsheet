import React from "react"

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#flexbox" className="nav__link">
            Flexbox layout
          </a>
        </li>
        <li className="nav__item">
          <a href="#grid" className="nav__link">
            Grid layout
          </a>
        </li>
        <li className="nav__item">
          <a href="#float" className="nav__link">
            Float layout
          </a>
        </li>
        <li className="nav__item">
          <a href="#others" className="nav__link">
            Others
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
