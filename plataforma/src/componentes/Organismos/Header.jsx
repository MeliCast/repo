import React, { createRef } from 'react'
import { NavLink } from "react-router-dom";
import MenuPublico from '../Rutas/MenuPublico';
import MenuPrivado from '../Rutas/MenuPrivado';



const menu = createRef()
const toggleMenu = () => menu.current.classList.toggle('show')

// const removeToken = () => {
//     localStorage.removeItem('token')
//     window.location = "/login"
// }

const Header = () => (

    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <NavLink to="/" >
                    <img  
                        src="https://static.vecteezy.com/system/resources/previews/000/537/646/non_2x/hand-holding-the-heart-vector.jpg"
                        alt="Logo" 
                        className="main-logo estiloImagenLogo"
                    />
                   
                </NavLink>
                <div className="colorTextoLogo">&nbsp;Madre y Niño Sano</div>
            </div>
            
            <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
                <nav className="main-menu"   ref={menu}>             
                    {
                        localStorage.getItem('token') ?
                        <MenuPrivado /> :
                        <MenuPublico />
                    } 

                </nav>
                <div 
                className="main-menu-toggle to-l" 
                onClick={() => toggleMenu()}
                >
                </div>
            </div>
        </div>     
    </header>
)

export default Header
/* 
<ul>
    <li><NavLink to="/" exact>Home</NavLink></li>
    <li><NavLink to="/Especialidades">Especialidades</NavLink></li>
    <li><NavLink to="/Cursos">Cursos</NavLink></li>
    <li><NavLink to="/Profesores">Profesores</NavLink></li>
    <li><span className="puntero" onClick={() => removeToken() }>Cerrar Sesión</span></li>
</ul> 
*/