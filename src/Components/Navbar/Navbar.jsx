import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top"data-bs-theme='dark'>
    <div className="container-fluid">
        <Link className="navbar-brand"to="/home">
            <img src={ require('../../images/news.jpg')} alt='logo' style={{width:"56px",height:"56px",borderRadius:"50%"}}/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pagination">
            <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/home">Home</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="/business">Business</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="health">Health</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="science">Science</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="sports">Sports</Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="technology">technology</Link>
            </li>

        </ul>

        <ul className="navbar-nav mb-2 mb-lg-0 pagination">
        <li className="nav-item">
        <Link className="nav-link"to="login">Login </Link>
            </li>
            <li className="nav-item">
        <Link className="nav-link"to="register">Register </Link>
            </li>
        </ul>

        </div>
    </div>
    </nav>
    </>
}
