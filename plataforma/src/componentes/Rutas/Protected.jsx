import React from 'react'
import { Route,Redirect } from 'react-router-dom'

const Protected = ({component:Component, ...rest }) => {
  
    const usuarioLogueado = localStorage.getItem('token')

    if(!usuarioLogueado){
        return <Redirect to="/Inicio" />
    }

    return  <Route {...rest} component={Component} />
  

}

export default Protected
