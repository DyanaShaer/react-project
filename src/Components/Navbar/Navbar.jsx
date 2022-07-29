import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <>
    <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <Link className="navbar-brand" to="Header">
             start bootstrab
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link   text-capitalize text-white px-0 px-lg-3 rounded" aria-current="page" to="portfolio">portfolio</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1" >
                <Link className="nav-link  text-capitalize text-white transition-5 px-0 px-lg-3 rounded" to="about">about</Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link  text-capitalize text-white transition-5  px-0 px-lg-3 rounded" to="contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
  }
}
