import React, {useState}  from 'react'
import Modal from '../Modal'


const lista = [
    { 
        "id": 1,
        "fecha": "15/12/2021",
        "hora": "11:00",
        "especialidad":"Pediatría",
        "medico":"Orihuela Tovar Raquel",
        "paciente":"Ana Mendez Medina"
    },
    { 
        "id": 2,
        "fecha": "25/12/2021",
        "hora": "12:00",
        "especialidad":"Pediatría",
        "medico":"Orihuela Tovar Raquel",
        "paciente":"Ana Mendez Medina"
    }
]


const MantMedico = () => {


    const restr=()=>{

       if (localStorage.getItem('usuario') != 'meli@gmail.com'){ window.location = "/"};

    }
    restr();


    const [estadoModal1, cambiarEstadoModal1]= useState(false); // Registrar
    const [estadoModal2, cambiarEstadoModal2]= useState(false); // Editar
    const [estadoModal3, cambiarEstadoModal3]= useState(false); // Eliminar


    const [data, setData] = useState(lista)
    const [medicoSeleccionado, setMedicoSeleccionado] = useState({
        id: '',
        fecha: '',
        hora: '',
        especialidad: '',
        medico:'',
        paciente:''
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
            if( medico.id === medicoSeleccionado.id){
                medico.fecha = medicoSeleccionado.fecha
                medico.hora = medicoSeleccionado.hora
                medico.especialidad = medicoSeleccionado.especialidad
                medico.medico = medicoSeleccionado.medico
                medico.paciente = medicoSeleccionado.paciente
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


    const formMantMedicos=()=>{
        window.location = "/MantMedico"
    }

    return (
        <>      
        <div className="ed-grid topbar dark-color">
            <div className ="m-right s-right l-right">


            &nbsp;&nbsp;&nbsp;<button className="button light-color" onClick={()=> formMantMedicos()} > Ir Mantenimiento de Medicos</button>&nbsp;&nbsp;&nbsp;

            </div>

        </div>

        <br />


        <div className="ed-grid">
            <h2>Mantenimiento de Paciente </h2>
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
                        <th>Nombre del Paciente</th>
                        <th>Especialidad</th>
                        <th>Médico</th>
                        <th>Fecha de atención</th>
                        <th>Hora de atención</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    { data.map( e =>(

                        <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.paciente}</td>
                        <td>{e.especialidad}</td>
                        <td>{e.medico}</td>
                        <td>{e.fecha}</td>
                        <td>{e.hora}</td>
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
                    <label htmlFor="id">
                        <b>ID</b>
                        <input 
                        type="text" readOnly
                        name="id"  
                        defaultValue={data[data.length-1].id+1}  />
                   </label>
                </div>
                <div className="form__item">
                    <label htmlFor="paciente">
                    <b> Paciente</b>
                        <input type="text" name="paciente"  placeholder="Ingrese el paciente" 
                        defaultValue={medicoSeleccionado? medicoSeleccionado.paciente :''}
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
                    <label htmlFor="medico">
                        <b>medico</b>
                        <input type="text" name="medico"  placeholder="Ingrese el médico"
                        defaultValue={medicoSeleccionado? medicoSeleccionado.medico :''}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="fecha">
                        <b>Fecha</b>
                        <input type="text" name="fecha"  placeholder="Ingrese la fecha"
                        defaultValue={medicoSeleccionado? medicoSeleccionado.fecha :''}
                        onChange={handleChange}
                        required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="hora">
                        <b>Hora</b>
                        <input type="text" name="hora"  placeholder="Ingrese la hora"
                        defaultValue={medicoSeleccionado? medicoSeleccionado.hora :''}
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
                    <label htmlFor="id">
                        <b>ID</b>
                        <input 
                        type="text" readOnly
                        name="id"  
                        defaultValue={medicoSeleccionado && medicoSeleccionado.id}  />
                   </label>
                </div>
                <div className="form__item">
                    <label htmlFor="paciente">
                    <b>Paciente</b>
                        <input 
                        type="text" 
                        name="paciente"
                        defaultValue={medicoSeleccionado && medicoSeleccionado.paciente} 
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
                    <label htmlFor="medico">
                        <b>medico</b>
                        <input 
                        type="text" 
                        name="medico" 
                        defaultValue={medicoSeleccionado && medicoSeleccionado.medico} 
                        onChange={handleChange} required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="fecha">
                        <b>Fecha</b>
                        <input 
                        type="text" 
                        name="fecha" 
                        defaultValue={medicoSeleccionado && medicoSeleccionado.fecha} 
                        onChange={handleChange} required/>
                    </label>
                </div>
                <div className="form__item">
                    <label htmlFor="hora">
                        <b>Hora</b>
                        <input 
                        type="text" 
                        name="hora" 
                        defaultValue={medicoSeleccionado && medicoSeleccionado.hora} 
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

export default MantMedico
