import { Link } from "react-router-dom";
import logo from "../../aseets/images/logo.png";
import flag from "../../aseets/images/flag.png";
import about from "../../aseets/images/about-us-img.png";
import chooseus from "../../aseets/images/choose-img.png";
import offer from "../../aseets/images/offer-img.png";
import network from "../../aseets/images/network-map-img.png";
import network1 from "../../aseets/images/network-type-img1.png";
import network2 from "../../aseets/images/network-type-img2.png";
import network3 from "../../aseets/images/network-type-img3.png";
import started from "../../aseets/images/ready-to-get-img.png";
import footerlogo from "../../aseets/images/footer-logo.png";
import person from "../../aseets/images/person-img.png";
import restore from "../../aseets/images/restore-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
const Home = () => {
  return (
    <div>
      {/* section header start */}
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container">
            <Link className="navbar-brand" href="#">
              <img src={logo} alt="" className="logo-img" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-menu text-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
      {/* section header end */}

      {/* section virtual technologies start */}
      <section className="virtual">
        <div className="virtual-technologies">
          <div className="social-icons d-flex">
            <div className="me-3 d-flex no-wrap text-nowrap">
              <span className="follow-us">FOLLOW US </span>{" "}
            </div>
            <div className="ms-5 d-flex no-wrap gap-3">
              <i class="fa-brands fa-youtube"></i>{" "}
              <i class="fa-brands fa-instagram"></i>{" "}
              <i class="fa-brands fa-twitter"></i>{" "}
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>
          <div className="virtual-info">
            <h1 className="display-6">
              THE VIRTUAL TECHNOLIGIES AND <br /> SOLUTIONS
            </h1>
            <hr></hr>
            <p>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button className="text-light button">
              <Link> GET STARTED</Link>
            </button>
          </div>
          <div className="virtual-icon">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </section>
      {/* section virtual technologies end */}

      {/* section about-us start */}
      <section>
        <div className="about-us-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center">
                <img src={about} alt="" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="about-info">
                  <h2 className="display-6">
                    GET TO KNOW <br></br> ABOUT VTS
                  </h2>
                  <hr></hr>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.
                  </p>
                  <p>
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.Rorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nunc vulputate libero et velit interdum.
                  </p>
                  <button className="button">
                    <Link>LEARN MORE</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section about-us end */}

      {/* section offer start */}
      <section>
        <div className="offer-section">
          <div className="container">
            <div className="row">
              <div>
                <h2>WHAT WE OFFER</h2>
                <div className="heading-line m-auto my-3"></div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                <div className="offer-card">
                  <div className="offer-image text-center">
                    <img src={offer} alt="" />
                  </div>
                  <div className="offer-card-info">
                    <span className="service px-2">SERVICE</span>
                    <h5>
                      INTEANET <br /> SEAVICES
                    </h5>
                    <p>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum,efficitur neque.
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                <div className="offer-card">
                  <div className="offer-image text-center">
                    <img src={offer} alt="" />
                  </div>
                  <div className="offer-card-info">
                    <span className="service px-2">SERVICE</span>
                    <h5>
                      INTEANET <br /> SEAVICES
                    </h5>
                    <p>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum,efficitur neque.
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                <div className="offer-card">
                  <div className="offer-image text-center">
                    <img src={offer} alt="" />
                  </div>
                  <div className="offer-card-info">
                    <span className="service px-2 service-card-3">SERVICE</span>
                    <h5>
                      INTEANET <br /> SEAVICES
                    </h5>
                    <p>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum,efficitur neque.
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                <div className="offer-card">
                  <div className="offer-image text-center">
                    <img src={offer} alt="" />
                  </div>
                  <div className="offer-card-info">
                    <span className="service px-2">SERVICE</span>
                    <h5>
                      INTEANET <br /> SEAVICES
                    </h5>
                    <p>
                      Forem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum,efficitur neque.
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="button mt-4">
                <Link>VIEW ALL</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* section offer start */}

      {/* section choose-us start */}
      <section>
        <div className="choose-us-section text-center">
          <img src={chooseus} alt="" />
        </div>
      </section>
      {/* section choose-us end */}

      {/* section network-coverage start */}
      <section>
        <div className="network-section text-center">
          <div className="container">
            <div className="network-sec-heading">
              <h2>NETWORK COVERAGE</h2>
              <div className="heading-line m-auto my-3"></div>
              <p>
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet <br />
                odio mattis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
                <br /> Curabitur tempus urna at turpis condimentum lobortis. Ut
                commodo efficitur neque.
              </p>
            </div>
            <div className="network-sec-img mt-4">
              <img src={network} alt="" />
            </div>
            <div className="network-types">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 py-3">
                    <div>
                      <img src={network1} alt="" />
                    </div>
                    <p>POINT OF PRES...</p>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 py-3">
                    <div>
                      <img src={network2} alt="" />
                    </div>
                    <p>POINT OF PRES...</p>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 py-3">
                    <div>
                      <img src={network3} alt="" />
                    </div>
                    <p>POINT OF PRES...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="button mt-4">
                <Link>VIEW ALL NETWORKS</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* section network-coverage end */}

      {/* our-testimonais-section start */}
      <section>
        <div className="our-testimonais-section">
          <div className="container ">
            <h2>OUR TESTIMONAIS</h2>
            <div className="heading-line m-auto my-3"></div>
            <div className="testimonai">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                <div className="testimonai-card-bg">
                <div className="testimonai-card">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="para">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque.
                    </p>
                    <div className="d-flex">
                      <div className="testimonai-img">
                        <img src={person} alt="" />
                      </div>
                      <div className="testimonai-name">
                        <h6>ANGLE</h6>
                        <p className="dolor-sit">Rorem ipsum dolor sit </p>
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="testimonai-card-bg card2-bg">
                <div className="testimonai-card">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="para">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque.
                    </p>
                    <div className="d-flex">
                      <div className="testimonai-img">
                        <img src={person} alt="" />
                      </div>
                      <div className="testimonai-name">
                        <h6>ANGLE</h6>
                        <p className="dolor-sit">Rorem ipsum dolor sit </p>
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="testimonai-card-bg">
                <div className="testimonai-card">
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="para">
                      Rorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque.
                    </p>
                    <div className="d-flex">
                      <div className="testimonai-img">
                        <img src={person} alt="" />
                      </div>
                      <div className="testimonai-name">
                        <h6>ANGLE</h6>
                        <p className="dolor-sit">Rorem ipsum dolor sit </p>
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>         
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* our-testimonais-section end */}

      {/* section our-partners start */}
      <section>
        <div className="our-partners-section">
          <div>
            <h2>OUR PARTNERS</h2>
            <div className="heading-line m-auto my-3"></div>
            <div className="container">
              <div>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="container-fluid">
                      <div className="cards">
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="cards">
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="container-fluid">
                      <div className="cards">
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="cards">
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="container-fluid">
                      <div className="cards">
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="cards">
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                        <div className="card-box text-center">
                          <div className="restore-img">
                            <img src={restore} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section our-partners end */}

      {/*  ready-to-started-section start */}
      <section>
        <div className="ready-to-started-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="ready-to-started-info">
                  <h2 className="display-6">
                    READY TO <br></br> GET STARTED?
                  </h2>
                  <hr></hr>
                  <p>
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                  <p>
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                  <button className="button">
                    <Link>CONTACT US NOW</Link>
                  </button>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center">
                <img src={started} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ready-to-started-section end */}

      {/* latest-news section start */}
      <section>
        <div className="latest-news-section">
          <h2>OUR LATEST NEWS</h2>
          <div className="heading-line m-auto my-3"></div>

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="latest-news-card ">
                  <div className="latest-news-card-img"></div>
                  <div className="latest-news-card-info">
                    <span className="news px-2">10-2-2023</span>
                    <h5 className="mt-2">
                      ESTABLISHED FACT <br /> THAT A READE WILL BE.
                    </h5>
                    <p>
                      Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc .
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="latest-news-card">
                  <div className="latest-news-card-img"></div>
                  <div className="latest-news-card-info">
                    <span className="news px-2 news-card-2">10-2-2023</span>
                    <h5 className="mt-2">
                      ESTABLISHED FACT <br /> THAT A READE WILL BE.
                    </h5>
                    <p>
                      Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc .
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="latest-news-card">
                  <div className="latest-news-card-img"></div>
                  <div className="latest-news-card-info">
                    <span className="news px-2">10-2-2023</span>
                    <h5 className="mt-2">
                      ESTABLISHED FACT <br /> THAT A READE WILL BE.
                    </h5>
                    <p>
                      Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc .
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="button mt-4">
              <Link>VIEW ALL</Link>
            </button>
          </div>
        </div>
      </section>
      {/* latest-news section end */}

      {/* section footer start */}
      <section>
        <div className="footer-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center py-3">
                <img src={footerlogo} alt="" />
                <div className="social-icons-section">
                  <div className="social-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="social-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <div className="social-icon">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="social-icon">
                    <i class="fa-brands fa-youtube"></i>
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
      {/* section footer end */}
    </div>
  );
};

export default Home;
