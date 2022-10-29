import React from 'react'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Home from './Paginas/Home'
import Inicio from './Paginas/Home'

import Especialidades from './Paginas/Especialidades'
import speciality from './Paginas/Especialidades'

import Especialidad from './Paginas/Especialidad'
import Login from './Paginas/Login'
import Registro from './Paginas/Registro'
import Pagina404 from './Paginas/Pagina404'
import Contactos from './Paginas/Contactos'
import Contact from './Paginas/Contactos'
import Medicos from './Paginas/Medicos'

import CitasReservar from './Paginas/CitasReservar'
import CitasProgramadas from './Paginas/CitasProgramadas'
import CitasHistorial from './Paginas/CitasHistorial'
import MantMedico from './Paginas/MantMedico'
import MantProgCitas from './Paginas/MantProgCitas'

import Protected from './Rutas/Protected'
import Public from './Rutas/Public'
import Header from './Organismos/Header'



const App = () => (

  <Router>
    <Header />

    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/Especialidades" exact component={Especialidades} />
      <Protected path="/Especialidades/:id"  component={Especialidad} />
      <Protected path="/Contactos" exact component={Contactos} />
      <Protected path="/Medicos" exact component={Medicos} />
      <Protected path="/CitasReservar" exact component={CitasReservar} />
      <Protected path="/CitasProgramadas" exact component={CitasProgramadas} />
      <Protected path="/CitasHistorial" exact component={CitasHistorial} />

      <Protected path="/MantProgCitas" exact component={MantProgCitas} />
      <Protected path="/MantMedico" exact component={MantMedico} />


      <Public path="/Inicio" exact component={Inicio} />
      <Public path="/speciality" exact component={speciality} />
      <Public path="/Login" exact component={Login} />
      <Public path="/Registro" exact component={Registro} />
      <Public path="/Contact" exact component={Contact} />

      <Route render={Pagina404} />
  
    </Switch>
  </Router>

)



export default App;
