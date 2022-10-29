import React from 'react'
import { NavLink } from "react-router-dom"

const removeToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('nombre')
  localStorage.removeItem('usuario')

  window.location = "/login"
}

const MenuPrivado = () => {
  return (
    <ul>
        <li><NavLink to="/" exact><b>Home</b></NavLink></li>
        <li><NavLink to="/Especialidades"><b>Especialidades</b></NavLink></li>
        <li><NavLink to="/Medicos"><b>Médicos</b></NavLink></li>

        <li><NavLink to="/CitasReservar"><b>Reservar&nbsp;Cita</b></NavLink></li>
        <li><NavLink to="/CitasProgramadas"><b>Citas&nbsp;Programadas</b></NavLink></li>
       {/* <li><NavLink to="/CitasHistorial"><b>Historial&nbsp;de&nbsp;Citas</b></NavLink></li>*/}

        <li><NavLink to="/Contactos"><b>Contactos</b></NavLink></li>
        { 
          (localStorage.getItem('usuario') === 'administrador@gmail.com') && <li><NavLink to="/MantMedico"><b>Mantenimiento</b></NavLink></li>

        }
     

        <li><span className="puntero" onClick={() => removeToken() }><b>Cerrar</b></span></li>
 
    </ul>
  )
}

export default MenuPrivado



//<li><NavLink to="/Cursos">Cursos</NavLink></li>
//<li><NavLink to="/Profesores">Profesores</NavLink></li>      