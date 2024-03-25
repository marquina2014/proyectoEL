import React from "react";


function Contacto(){
    
    return (
      <div className="Form-box">
        <form className="Register-form">
      
        <h1>Contacto</h1>
        <div className="input-box">
          <input type="text" required/>
          <label>Correo Electronico</label>
          <ion-icon name="mail-outline"></ion-icon>
          
      </div>
      <div className="input-box">
          <input type="text" required/>
          <label>Nombre Y Apellido</label>
          <ion-icon name="person-outline"></ion-icon>
      </div>
      <div className="input-box">
          <input type="text" required/>
          <label>Mensaje</label>
      </div>
    
      <button type="submit" className="submit-btn">Enviar</button>
      </form>
        </div>
    )
  }

  export default Contacto;