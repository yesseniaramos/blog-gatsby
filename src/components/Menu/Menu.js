import React from 'react'
import { Link } from "gatsby"
import SocialMedia from "../SocialMedia"
import "./Menu.scss"

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog developer</h2>
      </Link>
      <p>
        Blog sobre desarrollo web, programación react.
      </p>
      <SocialMedia />
      <h5>Lista de cursos</h5>
    </div>
  )
}
