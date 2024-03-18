import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import person from "../../aseets/images/person-img.png";

const initialState = [
  {
    id: 1,
    name: "ANGLE",
    subtitle: "Rorem ipsum dolor sit", 
    detail:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odiomattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabiturtempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    image: person,
  },
  {
    id: 2,
    name: "ANGLE",
    subtitle: "Rorem ipsum dolor sit", 
    detail:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odiomattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabiturtempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    image: person,
  },
  {
    id: 3,
    name: "ANGLE",
    subtitle: "Rorem ipsum dolor sit", 
    detail:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odiomattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabiturtempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    image: person,
  },
  {
    id: 4,
    name: "ANGLE",
    subtitle: "Rorem ipsum dolor sit", 
    detail:
      "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odiomattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabiturtempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    image: person,
  },
];
const TestimonailsCard = () => {

  const [data,Setdata] = useState(initialState)

  return (
    <div>
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
                className="mySwiper1"
              >
                {data.map((item, i) => {
                  return(
                    <SwiperSlide key={i}>
                    <div className="testimonai-card-bg">
                      <div className="testimonai-card">
                        <div>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="para">{item.detail}</p>
                        <div className="d-flex">
                          <div className="testimonai-img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="testimonai-name">
                            <h6>{item.name}</h6>
                            <p className="dolor-sit">{item.subtitle} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonailsCard;
