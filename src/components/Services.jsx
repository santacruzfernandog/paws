import React from 'react'

const NuestrosServicios = () => {
    return (
        <div id="servicios">
            <div className="container mt-5">
                <h3 className="text-center text-black">
                    ¿Por qué elegirnos?
                </h3>
                <p className="text-center text-black lead">En Awesome Pets sabemos que una mascota feliz, es una familia feliz. Por eso nos comprometemos en ofrecerte los mejores productos y servicios, garantizando el bienestar de tu mascota.</p>
                <div className="row mb-5">
                  <div className="col-sm-12 col-md-4 text-center mt-3">
                    <i className="fas fa-shopping-bag fa-2x"></i><h4 className="">Productos</h4>
                    <p className="mt-3">
                    Alimentos, higiene y jueguetes. Todo lo que tu mascota necesita.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 text-center mt-3">
                    <i className="fas fa-hammer fa-2x"></i><h4 className="">Servicios</h4>
                    <p className="mt-3">
                        Especializados en ofrecerle a tu mascota la atención que se merece. Vos queres cuidarlo, y nosotros sabemos como!
                    </p>
                </div>
                <div className="col-sm-12 col-md-4 text-center mt-3">
                    <i className="fas fa-headset fa-2x"></i><h4 className="">Veterinarios</h4>
                    <p className="mt-3">
                        Contamos con profesionales especializados para brindarte soporte en todo momento.
                    </p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default NuestrosServicios
