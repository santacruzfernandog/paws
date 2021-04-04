import React from 'react'

const ItemListContainer = (props) => {

    return (
        <div className="container mt-5">
          <div className="mb-5">
                <h1 id="my-brand" className="text-center text-warning mb-4 brand-title">{props.titulo}</h1>
                <p id="subtitle" className="text-dark text-center h6">{props.subtitulo}</p>
          </div>
          
          {props.children}
        </div>
    )
}

export default ItemListContainer
