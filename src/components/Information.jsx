import React from 'react'

const Info = () => {
    return (
        <div id="informacion" className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <h4 className=" text-center mt-5">Horarios</h4>
                        <h6 className="text-center">de atencion</h6>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="far fa-clock fa-lg mr-1"></i>
                                <p className="mb-1"> | Lunes a Viernes de 09 a 21hs</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="far fa-clock fa-lg mr-1"></i>
                                <p className="mb-1"> | Sábados, Domingos y Feriados de 11 a 18hs</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-12 col-md-4">
                        <h4 className="text-center mt-5">Envios</h4>
                        <h6 className="text-center">Dias Miercoles y Viernes despues de las 16hs</h6>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-subway fa-lg mr-3"></i>
                            <p className="lead mb-1 border-left border-dark pl-2">Sin costo en las estaciones de Quilmes, Bernal y Berazategui.</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-motorcycle fa-lg mr-2"></i>
                            <p className="lead mb-1 border-left border-dark pl-2">A domicilio por moto mensajería a cargo del cliente.</p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-shipping-fast fa-lg mr-2"></i>
                            <p className="lead mb-1 border-left border-dark pl-2">A todo el pais por MercadoEnvios.</p>
                        </div>
                    </div>
        
                    <div className="col-sm-12 col-md-4">
                        <h4 className="text-center mt-5">Medios de Pago</h4>
                        <h6 className="text-center">abona a traves de</h6>
                        <div className="ml-5 pl-3">
                            <div className="">
                                <i className="far fa-money-bill-alt fa-lg pr-2 border-right border-dark"></i>
                                <span className="lead"> Efectivo o Tarjeta</span>
                            </div>
                            <div className="">
                                <i className="far fa-credit-card fa-lg pr-2 border-right border-dark"></i>
                                <span className="lead"> Transferencia Bancaria</span>
                                <div className="">
                                    <i className="fas fa-qrcode fa-lg pr-3 border-right border-dark"></i>
                                    <span className="lead"> MercadoPago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
