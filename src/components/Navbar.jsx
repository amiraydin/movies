import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to={'/weekly'}>weekly</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/weekly-battle'}>weekly-battle</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/popular'}>popular</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/popular-battle'}>popular-battle</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/favorites'}>favorites</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
