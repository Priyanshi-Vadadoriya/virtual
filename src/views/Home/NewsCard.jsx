import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Heading from '../../layouts/Heading/Heading';
import newsimage from '../../aseets/images/news-bg2.png';
import newsimage2 from '../../aseets/images/news-bg.png';

const news = [
  
  {
    "id": 1,
    "name": "ESTABLISHED FACT THAT A READE WILL BE.",
    "detail": "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.",
    "date" : "10-02-2023",
    "image":newsimage2
},
{
    "id": 2,
    "name": "ESTABLISHED FACT THAT A READE WILL BE.",
    "detail": "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.",
    "date" : "2023-02-10",
    "color":"#F29921",
    "image":newsimage
},
{
    "id": 3,
    "name": "ESTABLISHED FACT THAT A READE WILL BE.",
    "detail": "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.",
    "date" : "2023-02-10",
    "image":newsimage2
}

]
const NewsCard = () => {

    const [data,Setdata] = useState(news);


  return (
    <div>
      
      <section>
        <div className="latest-news-section">
          <Heading title="OUR LATEST NEWS"/>

          <div className="container">
            <div className="row">
            {
            data.map((item,i)=>(
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="latest-news-card ">
                  <div className="latest-news-card-img"></div>
                  <div className="latest-news-card-info " style={{backgroundImage: `url(${item.image})`}}>
                    <span className="news px-2" style={{background:item.color}}>{item.date}</span>
                    <h5 className="mt-2">
                      {item.name}
                    </h5>
                    <p>
                      {item.detail}
                    </p>
                    <Link to="" className="read-more">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>  
            ))
            }
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="button mt-4">
              <Link>VIEW ALL</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsCard
