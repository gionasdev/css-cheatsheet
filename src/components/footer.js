import React from "react"

import sprite from "../img/sprite.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <svg className="footer__icon">
        <use xlinkHref={`${sprite}#icon-github`}></use>
      </svg>
      <svg className="footer__icon">
        <use xlinkHref={`${sprite}#icon-mail4`}></use>
      </svg>
      <svg className="footer__icon">
        <use xlinkHref={`${sprite}#icon-safari`}></use>
      </svg>
    </footer>
  )
}

export default Footer
