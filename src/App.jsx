import React from "react"
import './App.css'
import { Login, Registro } from "./Log-reg";
import Contacto from "./contacto";
import Acerca from "./acerca";
import Principal from "./pantallas/Home";



function App() {

  return (
  <div>
<Principal/>



  </div> 
  )
}

/* Funcion que controla el Header */
function Header(){
  return (
    <header>
        <h1>Dinero Gratis</h1>
        <nav>
            <a href="#">Acerca de nosotros</a>
            <a href="#">Contactanos</a>
            <a href="#">Registro</a>
            <a href="#">Login</a>
        </nav>
    </header>
  )
}









export default App
