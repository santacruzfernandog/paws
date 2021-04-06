import React from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = React.useState(initial)

    const restar = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    const sumar = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    return (
        <div className="card border-white" style={{width: '15rem'}}>
            <div className="card-body">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" id="button-addon1" onClick={()=> restar()} disabled={count === 0}>
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                    <input type="number" className="form-control bg-light text-center px-0 mx-0" value={count} readOnly/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" id="button-addon1" onClick={()=> sumar()} disabled={count === stock}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button className="btn btn-info btn-sm btn-block" disabled={count === 0} onClick={ ()=> onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
