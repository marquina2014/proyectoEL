import React, { useState } from "react";
import './Button.css'

function Button(){
    const [numero, setNumero] = useState(0);

    const aumentarNumero = () => {
      setNumero(numero + 1);
    };
  
    return (
      <div>
        <p>Número actual: {numero}</p>
        <button className="pulse" onClick={aumentarNumero}>Tocame mmgvo</button>
      </div>
    );
  };

export default Button;

/**<button className="pulse">Boton</button> */