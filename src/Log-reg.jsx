import React from "react";
import './App.css'

export function Login(){

    return(
  
      <div className="Form-box">
          <form className="Login-form">
              <h1>Login</h1>
              <div className="input-box">
                  <input type="text" required/>
                  <label>Email</label>
                  
              </div>
              <div className="input-box">
                  <input type="password" required/>
                  <label>Password</label>
                  <ion-icon name="lock-closed-outline"></ion-icon>
              </div>
              <div className="checkbox">
                  <span>
                      <input type="checkbox" id="login-checkbox"/>
                      <label for="login-checkbox"> Recuerdame</label>
                  </span>
              </div>
              <button type="submit" class="submit-btn">Submit</button>
              <h5 className="Register-btn">Ya tienes cuenta? Registrate</h5>
          </form>
      
      </div>
    )
  }
  
export function Registro(){
    return(
      <div className="Form-box">
      <form class="Register-form">
      <h1>Registro</h1>
      <div className="input-box">
          <input type="text" required/>
          <label>Nombre de usuario</label>
          <ion-icon name="person-outline"></ion-icon>
      </div>
      <div className="input-box">
          <input type="text" required/>
          <label>Correo Electronico</label>
          <ion-icon name="mail-outline"></ion-icon>
      </div>
      <div className="input-box">
          <input type="password" required/>
          <label>Contraseña</label>
          <ion-icon name="lock-closed-outline"></ion-icon>
      </div>
      <div className="checkbox">
          <input type="checkbox" id="register-checkbox"/>
          <label for="register-checkbox"> Acepta los terminos y condiciones</label>
      </div>
      <button type="submit" className="submit-btn">Enviar</button>
      <h5 class="Login-btn">Ya estas registrado? Inicia Sesion</h5>
  </form></div>
    )
  }

