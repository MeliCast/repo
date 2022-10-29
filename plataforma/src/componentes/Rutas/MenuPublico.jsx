
import React from 'react'
import { NavLink } from "react-router-dom"

const MenuPublico = () => {
  return (
    <ul>
        <li><NavLink to="/Inicio" exact><b>Home</b></NavLink></li>
        <li><NavLink to="/speciality" exact><b>Especialidades</b></NavLink></li>
        <li><NavLink exact to="/login"><b>Citas</b></NavLink></li>
        <li><NavLink to="/Contact"><b>Contactos</b></NavLink></li>    
    </ul>
  )
}

export default MenuPublico
//        <li><NavLink to="/registro">Registro</NavLink></li>