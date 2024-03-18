import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import offer from "../../aseets/images/offer-img.png";


const initialState = [
    {
        "id":1,
        "name":"INTEANET",
        "lastname":"SEAVICES",
        "detail":"Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,efficitur neque.",
        "image": offer
    },
    {
        "id":2,
        "name":"INTEANET",
        "lastname":"SEAVICES",
        "detail":"Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,efficitur neque.",
        "image": offer
    },
    {
        "id":3,
        "name":"INTEANET",
        "lastname":"SEAVICES",
        "detail":"Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,efficitur neque.",
        "image": offer,
        "color":"#F29921"
    },
    {
        "id":4,
        "name":"INTEANET",
        "lastname":"SEAVICES",
        "detail":"Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,efficitur neque.",
        "image": offer
    }
]
const Card = () => {

    const [data,setData] = useState(initialState);

  return (
    <div>
      
      <section>
        <div className="offer-section">
            <div className="container">
            <div className="row">
              <div>
                <h2>WHAT WE OFFER</h2>
                <div className="heading-line m-auto my-3"></div>
              </div>
              {
                data.map((item,i)=>(
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={i}>
                <div className="offer-card">
                  <div className="offer-image text-center">
                    <img src={item.image}  alt="" />
                  </div>
                  <div className="offer-card-info">
                    <span className="service px-2" style={{background:item.color}}>SERVICE</span>
                    <h5>
                      {item.name} <br/>
                      {item.lastname}
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
            <div className="d-flex justify-content-center">
              <button className="button mt-4">
                <Link>VIEW ALL</Link>
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Card
