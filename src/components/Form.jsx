import React from 'react'
import Button from './Button'
import { useState } from 'react';
import Card from './Card';
import Message from './Message';

const Form = () => {

  const [persona, setPersona] = useState({
    nombre: "",
    alimento: "",
  });

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setPersona({ ...persona, nombre: event.target.value });
  };

  const handleChangeEdad = (event) => {
    console.log(event.target.value);
    setPersona({ ...persona, alimento: event.target.value });
  };

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (
      persona.nombre.length > 3 && 
      persona.alimento.length > 6 
    ) {
      setError(false);
      setShow(true);
      
    } else {
      setError(true);
      setShow(false)
      
    }
  };

  const reset = () => {
    setPersona({
      nombre: "",
      alimento: "",
    });
  };

  const send =() => {
    if(show){
      <Card persona={persona}/>
    } else if(error==true) {
      <Message/>
    }
  }

  return (
    <>

    
    <div>Cual es tu alimento favorito?</div>
    <form onSubmit={handleSubmit}>
        <label>Tu Nombre: </label>
            <input type="text" value={persona.nombre} onChange={handleChangeName}/>
       
        <label>Alimento favorito:</label>
            <input type="text"  value={persona.alimento} onChange={handleChangeEdad}/>
        
        <button type='submit'>Enviar</button>
        <Button onClick={reset}>Resetear</Button>


    </form>

    {show ? (<Card persona={persona}/>) : (<Message/>)}

    
    </>
  )
}

export default Form