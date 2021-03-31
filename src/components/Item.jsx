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
            <div class="card mb-3" style={{width: "540px"}}>
                <div class="row no-gutters">
                    <div class="col-md-4 d-flex justify-content-center align-items-center">
                        <i class="fas fa-paw fa-7x text-success"></i>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{item.nombre}</h5>
                            <p class="card-text">Breve descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia.</p>
                            <small class="text-dark bg-warning">Awesome Pets</small>
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
