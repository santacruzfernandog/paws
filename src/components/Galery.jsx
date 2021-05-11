import React from 'react'
import image1 from '../img/galery/pet1.jpg'
import image2 from '../img/galery/pet2.jpg'
import image3 from '../img/galery/pet3.jpg'
import image4 from '../img/galery/pet4.jpg'


const Galeria = () => {
    return (
        <div id="galeria">
            <div className="row my-4 no-gutters">
                <div className="col-sm-12 col-md-3">
                    <img src={image1} alt="" className="img-fluid"></img>
                </div>
                <div className="col-sm-12 col-md-3">
                  <img src={image2} alt="" className="img-fluid"></img>
              </div>
              <div className="col-sm-12 col-md-3">
                  <img src={image3} alt="" className="img-fluid"></img>
              </div>
              <div className="col-sm-12 col-md-3">
                  <img src={image4} alt="" className="img-fluid"></img>
              </div>
            </div>
        </div>
    )
}

export default Galeria
