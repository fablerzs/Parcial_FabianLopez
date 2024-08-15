
import React from 'react'


const Card = ({persona}) => {
  return (
    <>
        <div className='card'>
            <h4>Hola, {persona.nombre}. Tu alimento favorito es:</h4>
            <h3>{persona.alimento}</h3>
        </div>

    </>
  )
}

export default Card