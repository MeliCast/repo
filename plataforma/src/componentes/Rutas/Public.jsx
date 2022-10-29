import React from 'react'
import { Route,Redirect } from 'react-router-dom'

const Public    = ({component:Component, ...rest }) => {
  
    const usuarioLogueado = localStorage.getItem('token')

    if( usuarioLogueado){
        return <Redirect to="/" />
    }

    return  <Route {...rest} component={Component} />
  
}

export default Public
