import React from "react"
import { Link } from "gatsby"

export default props => (
  <div>
    <Link to="/"> Home </Link> 
    <Link to="/about/"> About Gatsby </Link>
    <Link to="/contact/"> Contact </Link>
    <Link to="/about-css-modules"> About CSS Module </Link>
    <h1> {props.headerText} </h1>
  </div>
)
