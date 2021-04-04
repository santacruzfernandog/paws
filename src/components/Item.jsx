import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({item}) => {

    const [mostrarDetalle, setMostrarDetalle] = React.useState(false)

    const handleDetalle = ()=> {
        if(mostrarDetalle){
            setMostrarDetalle(false)
        } else {
            setMostrarDetalle(true)
        }
    }

    return (
        <div className="row">
            <div className="card mb-3" style={{width: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <i className="fas fa-paw fa-7x text-success"></i>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">Breve descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia.</p>
                            <small className="text-dark bg-warning">Awesome Pets</small>
                            <button type="button" className="btn btn-primary btn-sm float-right" onClick={handleDetalle}>Ver mas</button>
                        </div>
                    </div>
                </div>
            </div>

            {mostrarDetalle && <ItemDetailContainer item={item}/>}
        </div>

    )
}

export default Item
