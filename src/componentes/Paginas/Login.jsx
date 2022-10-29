
import React, {useState}  from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
const autenticacion = e => {
 
    
    e.preventDefault()
    const form = e.target

    const data = {
        'correo': e.target.email.value,
        'password': e.target.password.value
    }
    



    
    console.log(data);
    const headers ={
        "Content-Type": "application/json"        
    }
    const API_URL = process.env.REACT_APP_API_URL
    
    Axios.post(`${API_URL}/usuarioacceder`,data,{headers})
    .then(r => {

        if (r.data.message === "BIENVENIDO") {

        localStorage.setItem('token',r.data.token)
        localStorage.setItem('nombre',r.data.usuario)
        localStorage.setItem('usuario',r.data.correo)
        /*console.log(r.data);*/
             Swal.fire({
            icon:'success',
            title:'ACCESO',
            text: `Usuario Logueado con Token  ${r.data.token}`,
            showConfirmButton:false,
            timer: 2000,
    
            })  
        window.location = "/"

        }else{
            if (r.data.message === "PASSWORD INCORRECTO"){
                 Swal.fire({
                    icon: 'error',
                    title:'CITAS MEDICAS',
                    text: 'Clave es incorrecto',
                    showConfirmButton:false,
                    timer: 2000,
                })
            }else{
                 Swal.fire({
                    icon: 'error',
                    title:'CITAS MEDICAS',
                    text: 'Usuario su Email es incorrecto',
                    showConfirmButton:false,
                    timer: 2000,
                })
    
            }
        }
    })
    
   

   /* Axios.post('https://api-edteam.alejogs4.now.sh/login',data)
    .then(r => {
        localStorage.setItem('token',r.data.token)
        localStorage.setItem('nombre',r.data.user.name)
        localStorage.setItem('usuario',r.data.user.email)

        window.location = "/"
       // console.log(r);
    })*/
    
    .catch(e => alert("Error al iniciar sesión") )



}

const Login = () =>  (
    
    
        <div className="ed-grid">
            <div className="l-block"></div>
            <div className ="m-to-center m-60 lg-30" > 
                <h1 className="center">Login</h1>

                <form onSubmit={ autenticacion.bind()} >
                    <div className="form__item">
                        <label htmlFor="email">
                        <b>Correo electrónico</b>
                            <input type="email" name="email" id="email" placeholder="Ingese su Email" required/>
                        </label>
                    </div>

                    <div className="form__item">
                        <label htmlFor="password">
                        <b>Contraseña</b>
                            <input type = "password" name="password" id="password" placeholder="Ingese su Contraseña" required/>
                        </label>
                    </div>

                    <div className="form__item">
                            <input type="submit" className="button full" value="Iniciar sesión" />      
                    </div>

                </form>
                <div className="center">
                    <p>¿No tienes cuenta de usuario? <Link to="/registro">Crear cuenta</Link> </p>
                </div>
            </div>
        </div>
)


export default Login
