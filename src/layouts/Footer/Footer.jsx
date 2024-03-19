import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from "../../aseets/images/footer-logo.png";
const Footer = () => {
  return (
    <div>
            <section>
        <div className="footer-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center py-3">
                <img src={footerlogo} alt="" />
                <div className="social-icons-section">
                  <div className="social-icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="social-icon">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="social-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="social-icon">
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center py-3">
                <h6>OUR SERVICES</h6>
                <hr className="m-auto my-3"></hr>
                <p>
                  <Link>Strategy Activation</Link>
                </p>
                <p>
                  <Link>Value Chain</Link>
                </p>
                <p>
                  <Link>Technology</Link>
                </p>
                <p>
                  <Link>Follow up</Link>
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center py-3">
                <h6>OUR SERVICES</h6>
                <hr className="m-auto my-3"></hr>
                <p>
                  <Link>Research </Link>
                </p>
                <p>
                  <Link>Blog</Link>
                </p>
                <p>
                  <Link>living labs </Link>
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center py-3">
                <h6>OUR SERVICES</h6>
                <hr className="m-auto my-3"></hr>
                <p>
                  <Link>Greenville, Sc</Link>
                </p>
                <p>
                  <Link>+1-833-722-6338</Link>
                </p>
                <p>
                  <Link>EMAIL US</Link>
                </p>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright © 2022. 101 Solutions, LLC. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
