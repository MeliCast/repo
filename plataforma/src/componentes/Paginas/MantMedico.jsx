import React, {useState, useEffect}  from 'react'
import { getAllMedicos } from '../../redux/actionCreators';
import { connect } from "react-redux"
import store from '../../redux/store'
import Modal from '../Modal'
const lista = [

    { 
        "id": 1,
        "nombre": "Cortez Sosa Mariela Nery",
        "especialidad": "Pediatría",
        "email": "nerysosa@gmail.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2015/04/Andamayo-Milena.png"      
      },
      { 
        "id": 2,
        "nombre": "Del Castillo Segovia Maria Angelica",
        "especialidad": "Ginecología",
        "email": "mariacastillo@hotmail.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2021/08/Dr.Angeles-380x380.jpg" 
      },
      { 
        "id": 3,
        "nombre": "Gambini Briceño Mayra Madeleine",
        "especialidad": "Nutrición",
        "email": "mayrabriceño@gmail.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2017/05/Becerra-Alicia-3.png"
      },
      { 
        "id": 4,
        "nombre": "Gomez Cardenas Eleazar",
        "especialidad": "Pediatría",
        "email": "eleazarcardenas@yahoo.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2016/09/Bravo-Yolanda.png"
      },
      { 
        "id": 5,
        "nombre": "Grande Avalos Daniela",
        "especialidad": "Odontología",
        "email": "danielaavalos@gmail.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2015/04/Cachay-Silvia-3.png" 
      },
      { 
        "id": 6,
        "nombre": "Grande Ramos Jose",
        "especialidad": "Pediatría",
        "email": "joseramos@gmail.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2015/04/Alzamora-Patricio-1.png" 
      },
      { 
        "id": 7,
        "nombre": "Obregon Zegarra Eva Haydee",
        "especialidad": "Nutrición",
        "email": "evazegarra@live.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2015/10/Lombardi-Edda-3.png" 
      },
      { 
        "id": 8,
        "nombre": "Orihuela Tovar Raquel",
        "especialidad": "Pediatría",
        "email": "raqueltovar@outlook.com",
        "foto":"https://clinicaangloamericana.pe/wp-content/uploads/2021/03/CLINICA-ANGLO0366.jpg" 
      }

    
  ];


const MantMedico = ({match, medicos}) => {

    const restr=()=>{

        if (localStorage.getItem('usuario') != 'meli@gmail.com'){ window.location = "/"};
 
     }
     restr();

    const [estadoModal1, cambiarEstadoModal1]= useState(false); // Registrar
    const [estadoModal2, cambiarEstadoModal2]= useState(false); // Editar
    const [estadoModal3, cambiarEstadoModal3]= useState(false); // Eliminar


    

    
    const [data, setData] = useState([])  

    
  
  

    
    const [medicoSeleccionado, setMedicoSeleccionado] = useState({
        id: 1,
        nombre: '',
        especialidad: '',
        email: '',        
      });


      const seleccionarMedico=(elemento , caso)=>{
        setMedicoSeleccionado(elemento);
        (caso ==='Editar') ? cambiarEstadoModal2(!estadoModal2) : cambiarEstadoModal3(!estadoModal3)
      }
    
      const handleChange=e=>{
        const {name, value}=e.target;
        setMedicoSeleccionado((prevState)=>({
          ...prevState,
          [name]: value
        }));
        //console.log(medicoSeleccionado);
      }

      const editar=()=>{
        var dataNueva=data;
        dataNueva.map(medico=>{
            if(medico.id === medicoSeleccionado.id){
                medico.nombre = medicoSeleccionado.nombre
                medico.especialidad = medicoSeleccionado.especialidad
                medico.email = medicoSeleccionado.email
            }
         })

        setData(dataNueva);
        cambiarEstadoModal2(false);
      }


    const eliminar = () => {

        setData(data.filter(medico=>medico.id!==medicoSeleccionado.id))
        cambiarEstadoModal3(false);
        
    }

    const abrirModalInsertar=()=>{
        setMedicoSeleccionado(null)
        cambiarEstadoModal1(true)
    }

    const insertar = () => {
        var valorInsertar = medicoSeleccionado;
        valorInsertar.id = data[data.length-1].id+1;
        var dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        cambiarEstadoModal1(false);


    }

    const formMantProgCitas=()=>{
        window.location = "/MantProgCitas"
    }

    
        useEffect(() => {
            store.dispatch(getAllMedicos())

            setData(medicos);
            console.log(data);
          }, [match])
        
    
    

    return (
        
        <>      

<div className="ed-grid topbar dark-color">
            <div className ="m-right s-right l-right">


            &nbsp;&nbsp;&nbsp;<button className="button light-color" onClick={()=> formMantProgCitas()} > Ir Mantenimiento Pacientes</button>&nbsp;&nbsp;&nbsp;

            </div>

        </div>

        <br />
        <div className="ed-grid">
            <h2>Mantenimiento de Medicos</h2>
        </div>
        <div className="ed-grid">
            <div> <button className="button --fourth-color-alt" onClick={()=> abrirModalInsertar()}  >Agregar</button></div>
            <br/>
        </div>

        <div className="ed-grid">
            <div className="table-container">
                <table className='table--dark' >
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>

                    { data &&
                    
                    data.map( e =>(

                        <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.nombre}</td>
                        <td>{e.especialidad}</td>
                        <td>{e.email}</td>
                        <td><button className="button accent-color" onClick={()=>seleccionarMedico(e,'Editar' )} >Editar</button>  {" "} 
                            <button className="button third-color" onClick={()=>seleccionarMedico(e,'Eliminar' )} >  Eliminar</button></td>
                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>

        </div>

        

        <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} titulo="Registrar">

            <br/>

                <div className="form__item">
                    <label htmlFor="fullname">
                        <b>ID</b>
                        <input 
                        type="text" readOnly
                        name="id"  
                        />
                   </label>
                </div>
                <div className="form__item">
                    <label htmlFor="fullname">
                    <b> Nombre completo</b>
                        <input type="text" name="nombre"  placeholder="Ingrese el nombre" 
                        defaultValue={medicoSeleccionado? medicoSeleccionado.nombre :''}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="especialidad">
                    <b>Especialidad</b>
                        <input type="text" name="especialidad"  placeholder="Ingrese la especialidad"
                         defaultValue={medicoSeleccionado? medicoSeleccionado.especialidad :''}
                         onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form__item">
                <label htmlFor="email">
                    <b>Correo electrónico</b>
                    <input type="email" name="email"  placeholder="Ingrese el e-mail"
                     defaultValue={medicoSeleccionado? medicoSeleccionado.email :''}
                     onChange={handleChange}
                    required/>
                </label>
                </div>
                <div className="form_item center">
                    <input type="submit" className="button"onClick={()=> insertar()} value="Registrar"/>{" "}
                    <input type="submit" className="button text-color" onClick={()=> cambiarEstadoModal1(false)} value="Cancelar"/>
                </div>
  
        </Modal>


        <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2} titulo="Editar">

                <br/>

                <div className="form__item">
                    <label htmlFor="fullname">
                        <b>ID</b>
                        <input 
                        type="text" readOnly
                        name="id"  
                        defaultValue={medicoSeleccionado && medicoSeleccionado.id}  />
                   </label>
                </div>
                <div className="form__item">
                    <label htmlFor="fullname">
                    <b> Nombre completo</b>
                        <input 
                        type="text" 
                        name="nombre"
                        defaultValue={medicoSeleccionado && medicoSeleccionado.nombre} 
                        onChange={handleChange} required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="especialidad">
                        <b>Especialidad</b>
                        <input 
                        type="text" 
                        name="especialidad" 
                        defaultValue={medicoSeleccionado && medicoSeleccionado.especialidad} 
                        onChange={handleChange} required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="email">
                        <b>Correo electrónico</b>
                        <input 
                        type="email" 
                        name="email" 
                        defaultValue={medicoSeleccionado && medicoSeleccionado.email} 
                        onChange={handleChange} required/>
                    </label>
                </div>

                <div className="form_item center">
                    <input type="submit" className="button" onClick={()=>editar()} value="Guardar cambios"/> {" "}
                    <input type="submit" className="button text-color" onClick={()=> cambiarEstadoModal2(false)} value="Cancelar"/>
                </div>
        
        </Modal>


        <Modal estado={estadoModal3} cambiarEstado={cambiarEstadoModal3} titulo="Mensaje">

                <br/>
                <center><h3>Estás Seguro que deseas eliminar</h3></center>
                <div className="form_item center">
                    <input type="submit" className="button third-color" onClick={() => eliminar()} value="SI"/>{" "}
                    <input type="submit" className="button" onClick={()=>cambiarEstadoModal3(false)} value="NO"/>
                </div>

        </Modal>

        </>
    )
}
const mapStateToProps = state => ({
    medicos: state.medicosReducer.medicos
  })

/*export default MantMedico*/
export default connect(mapStateToProps, {})(MantMedico)
