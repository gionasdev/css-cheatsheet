import React from "react"

import sprite from "../img/sprite.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__heading1">CSS Cheatsheet</h1>
        <h2 className="header__heading2">A reference for CSS goodness</h2>
        <p className="header__paragraph">
          It's quite difficult to remember everything I learned in the vast
          world of CSS. This gitrepo collects everything I've seen and I learned
          by following courses and visiting related websites.
        </p>
      </div>
      <svg className="header__icon">
        <use xlinkHref={`${sprite}#icon-chevron-thin-down`}></use>
      </svg>
    </header>
  )
}

export default Header
