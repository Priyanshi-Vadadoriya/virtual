import { Link } from "react-router-dom";


import about from "../../aseets/images/about-us-img.png";
import chooseus from "../../aseets/images/choose-img.png";
import network from "../../aseets/images/network-map-img.png";
import network1 from "../../aseets/images/network-type-img1.png";
import network2 from "../../aseets/images/network-type-img2.png";
import network3 from "../../aseets/images/network-type-img3.png";
import started from "../../aseets/images/ready-to-get-img.png";
import "swiper/css/pagination";
import "swiper/css";
import Card from "./Card";
import TestimonailsCard from "./TestimonailsCard";
import PartnersCard from "./PartnersCard";
import NewsCard from "./NewsCard";
import Heading from "../../layouts/Heading/Heading";
import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* section header start */}
      {/* section header end */}

      {/* section virtual technologies start */}
      <section className="virtual">
        <div className="virtual-technologies">
          <div className="social-icons d-flex">
            <div className="me-3 d-flex no-wrap text-nowrap">
              <span className="follow-us">FOLLOW US </span>{" "}
            </div>
            <div className="ms-5 d-flex no-wrap gap-3">
              <i className="fa-brands fa-youtube"></i>{" "}
              <i className="fa-brands fa-instagram"></i>{" "}
              <i className="fa-brands fa-twitter"></i>{" "}
              <i className="fa-brands fa-facebook-f"></i>
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
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </section>
      {/* section virtual technologies end */}

      {/* section about-us start */}
      <section>
        <div className="about-us-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                <img src={about} alt="" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
      <Card />
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
              <Heading title="NETWORK COVERAGE" />
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
      <TestimonailsCard />
      {/* our-testimonais-section end */}

      {/* section our-partners start */}
      <PartnersCard />
      {/* section our-partners end */}

      {/*  ready-to-started-section start */}
      <section>
        <div className="ready-to-started-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                <img src={started} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ready-to-started-section end */}

      {/* latest-news section start */}
      <NewsCard />
      {/* latest-news section end */}

      {/* section footer start */}
      <Footer />
      {/* section footer end */}
    </div>
  );
};

export default Home;
