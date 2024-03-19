import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../aseets/images/logo.png";
import flag from "../../aseets/images/flag.png";
const Navbar = () => {

  const [fixnavbar,setFixnavbar] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 50){
        setFixnavbar(true)
      }else{
        setFixnavbar(false)
      }
    })
  })
  return (
    <div>
      
      <div>
        <nav className={`navbar navbar-expand-lg bg-light  ${fixnavbar ? "navbar-fixed" : ""} `}>
          <div className="container">
            <Link className="navbar-brand" href="#">
              <img src={logo} alt="" className="logo-img" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-menu text-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-center" to="#">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-center" to="#">
                    Our Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-center" to="#">
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-center" to="#">
                    <img src={flag} alt="" width={20} />
                    <select className="select-option">
                      <option> EN</option>
                    </select>
                  </Link>
                </li>
              </ul>
              <div className="d-flex justify-content-center">
                <button className="button">
                  <Link>CONTACT US</Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
