import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const RegistrarUsuario = e =>{
    e.preventDefault()
    const form = e.target

   /*const data = {
        "email": form.email.value,
        "name": form.fullname.value,
        "password": form.password.value
    }*/

    const data = {
      "correo": form.email.value,
      "usuario": form.fullname.value,
      "password": form.password.value
  }

  const API_URL = process.env.REACT_APP_API_URL

  /*console.log(data);*/
    
    Axios.post(`${API_URL}/usuario`,data)
    .then(r => {
        alert("Usuario creado")
        window.location = "/login"
    })
    .catch(() => alert("Error al crear usuario"))
}


const Registro = () => (

    <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear cuenta</h1>
      <form onSubmit={RegistrarUsuario.bind()} >
      <div className="form__item">
          <label htmlFor="fullname">
          <b> Nombre completo</b>
            <input type="text" name="fullname" id="fullname" placeholder="Ingrese su nombre" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="email">
          <b>Correo electrónico</b>
            <input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
          <b>Contraseña</b>
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" required/>
          </label>
        </div>
        <div className="form_item">
          <input type="submit" className="button full" value="Registrar"/>
        </div>
      </form>
      <div className="center">
        <p>¿Ya tienes cuenta de usuario? <Link to="/login"><b>Iniciar sesión</b></Link> </p>
      </div>
    </div>
  </div>

)

export default Registro
