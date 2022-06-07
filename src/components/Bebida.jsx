import React from 'react'

const Bebida = ({bebida}) => {

  return (
    <div className='col-md-6 col-lg-3'>
        <div className='mb-4 card'>
            <img src={bebida.strDrinkThumb} alt="bebida" className="card-img-top" />
            <div className='card-body'>
                <h5 className="card-title">{bebida.strDrink}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and 
                    make up the bulk of the card's content.
                </p>
                <button 
                    type="button" 
                    className='btn btn-info text-uppercase fw-bold w-100'
                    >
                        Ver Receta
                </button>
            </div>
        </div>
    </div>
  )
}

export default Bebida