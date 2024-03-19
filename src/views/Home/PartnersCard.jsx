import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import restore from "../../aseets/images/restore-logo.png";
import restore2 from "../../aseets/images/restore2-logo.png";
import Heading from "../../layouts/Heading/Heading";

const initialState = [
  {
    image: restore,
    image2: restore2
  },
  {
    image: restore,
    image2: restore2
  },
  {
    image: restore,
    image2: restore2
  },
];
const Card = ({img}) =>{

  return (
    <div className="cards">
      <div className="card-box text-center">
        <div className="restore-img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

const PartnersCard = () => {

  const [data,Setdata] = useState(initialState)

  return (
    <div>
      <section>
        <div className="our-partners-section">
          <div>
            <Heading title="OUR PARTNERS"/>
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
                {
                  data.map((item,i)=>(
                    <SwiperSlide>
                    <div className="container-fluid">
                      <div className="cards">
                        <Card  img={item.image}/>
                        <Card img={item.image} />
                        <Card img={item.image} />
                        <Card img={item.image} />
                      </div>
                      <div className="cards">
                      <Card img={item.image2} />
                      <Card img={item.image2} />
                      <Card img={item.image2} />
                      <Card img={item.image2} />
                      </div>
                    </div>
                  </SwiperSlide>
                  ))
                }
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnersCard
