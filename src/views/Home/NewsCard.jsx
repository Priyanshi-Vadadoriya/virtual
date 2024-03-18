import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const NewsCard = () => {

    const [data,Setdata] = useState("");

    useEffect(() => {
        fetch("http://localhost:3005/news")
        .then((res) => {return res.json()})
        .then((data) => Setdata(data))
        .catch((err) => console.log(err));
      });

  return (
    <div>
      
      <section>
        <div className="latest-news-section">
          <h2>OUR LATEST NEWS</h2>
          <div className="heading-line m-auto my-3"></div>

          <div className="container">
            <div className="row">
            {
            data && data.map((item,i)=>(
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="latest-news-card ">
                  <div className="latest-news-card-img"></div>
                  <div className="latest-news-card-info">
                    <span className="news px-2">{item.date}</span>
                    <h5 className="mt-2">
                      {item.title}
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
