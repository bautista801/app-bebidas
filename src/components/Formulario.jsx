import React from 'react'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'
import { useState } from 'react'

const Formulario = () => {

    const {categorias} = useCategorias()

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: '',
    })

    const [alerta, setAlerta] = useState('')

    const {consultarBebidas} = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
    }

  return (
    <form 
        onSubmit={handleSubmit}
        className='row'>

        {
            alerta &&   <div class="alert alert-danger text-center" role="alert">
                            {alerta}
                        </div>
        }



            <div className='text-center col-lg-6'>
                <label 
                    className='form-label mb-3 mt-5' 
                    htmlFor="nombre"
                >
                    Nombre Bebida
                </label>

                <input 
                    id='nombre'
                    className='form-control' 
                    placeholder='Ejemplo: Tequila, Vodka, Etc' 
                    type="text" 
                    name='nombre'
                    value={busqueda.nombre}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>
            



            
            <div className='text-center col-lg-6'>
                <label 
                    className='form-label mb-3 mt-5' 
                    htmlFor="categoria"
                >
                    Categoría Bebida
                </label>

                <select 
                    name="categoria" 
                    id="categoria"
                    className='form-select text-center'
                    value={busqueda.categoria}
                    onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                >
                    <option value="">-- Selecciona Categoría --</option>
                    {categorias.map(categoria => (
                        <option
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >
                            {categoria.strCategory}
                        </option>
                    ))}
                </select>                                  
                <button type='sumbit' className='btn btn-dark btn-lg my-3 text-uppercase'> 
                    Buscar Bebida
                </button>

            </div>


    </form>
  )
}

export default Formulario