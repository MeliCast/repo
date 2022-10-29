
import React, { useEffect, useState } from 'react'
import store from '../../redux/store'
import { getAllMedicos } from '../../redux/actionCreators'
import { getAllEspecialidades } from '../../redux/actionCreators'
import { connect } from "react-redux"
import axios from "axios"
import Swal from "sweetalert2";




//import { Link } from 'react-router-dom'




  const CitasReservar = ({match,especialidades, medicos}) => {
    const [valorsel, setValorSel] = useState('PRESENCIAL')
    const [reserva, SetReserva] = useState( {
      medicoId  : 1,              
      especialidadId: 1,
      tipocita: "PRESENCIAL",
      importe:0.00,
      fechcita:'2022-02-25T22:35:32-05:00'

  });

  const crearReserva = async (nuevaReserva)=>{    
    try {

        const headers = {
            "Content-Type" : "application/json"
        }
    const URL = process.env.REACT_APP_API_URL
    const {data} = await axios.post(`${URL}/reserva`,nuevaReserva,{headers});
    return data
        
    } catch (error) {
        throw error;
    }

    

}
  const submit = async (e) => {
    e.preventDefault()
    console.log(reserva);
    const accionGenerar =  await Swal.fire ({
      icon: "question",
      title:"AVISO AL PACIENTE",
      text: "Desea Enviar la RESERVA?",
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText: 'SI',
      cancelButtonText: 'NO'
       })

       

  if (accionGenerar.isConfirmed){
 
      crearReserva(reserva); 
      Swal.fire({
        icon: "success",
        title: "CITA DE MEDICA RESERVADA",
    });

  }   

      

   window.location = "/CitasProgramadas";
}

const SeleccionarOpcion  = e => {
  
  if ( e.target.name == "tipocita") {

    const target = e.target;
    
  if (target.checked) {                
    setValorSel(e.target.value);    
    SetReserva ({...reserva,[e.target.name]:valorsel})  //cogiendo el estado de lvalue y spred operatr
  }
  
   console.log(reserva);
}

  
}

const actualizarInput = (e) =>{

 // crea un nuevo objeto `Date`
    
  if ( e.target.name == "medicoId" || e.target.name == "especialidadId") {
        const id = e.target.value
        SetReserva ({...reserva,[e.target.name]:parseInt(id)})  //cogiendo el estado de lvalue y spred operatr
    }

    
      if ( e.target.name == "importe"){
        const monto = e.target.value
        SetReserva ({...reserva,[e.target.name]:parseFloat(monto)})  //cogiendo el estado de lvalue y spred operatr
      }
    
        if ( e.target.name == "fechcita"){
            const cfecha = e.target.value;
            
            SetReserva ({...reserva,[e.target.name]:cfecha })
        }
        


              console.log(reserva); 

};


    useEffect(() => {
      store.dispatch(getAllEspecialidades())
      store.dispatch(getAllMedicos())
    }, [match])
    
 
  return (

    <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Reservar Cita</h1>

      <form onSubmit={submit.bind()} >
      <div className="form__item">
          <label htmlFor="tipocita">
          <b>Tipo de Citas:</b><br/>
            
            <input type="radio" name="tipocita"  value = "PRESENCIAL"     checked = {valorsel === "PRESENCIAL"}   id="tipocita" onChange = {SeleccionarOpcion}    defaultChecked/>Presencial &nbsp;&nbsp;&nbsp;
            <input type="radio" name="tipocita"  value = "TELECONSULTA"   checked = {valorsel === "TELECONSULTA"}   id="tipocita" onChange = {SeleccionarOpcion}    />Teleconsulta &nbsp;&nbsp;&nbsp;
            
            
          </label>
        </div>
        {
               especialidades &&
        <div className="form__item">
          <label htmlFor="especialidad">
          <b>Especialidad:</b>
                
                <select  id="especialidad"   value = {parseInt(reserva.especialidadId)} name="especialidadId" onChange = {(e) =>{actualizarInput(e)}}  required>
                        {especialidades.map((esp, i) => (
                        <option value={esp.id} key={i} > {esp.nombre} </option>                                                     
                                    
                                        ))                      
                                }                                                 
                            </select>                                          
            
          </label>
        </div>
      }

{
               medicos &&
        <div className="form__item">
          <label htmlFor="medicos">
          <b> Medicos:</b>
            <select  id="medicos"   value = {parseInt(reserva.medicoId)} name="medicoId" onChange = {(e) =>{actualizarInput(e)}}  required>
            {medicos.map((med, i) => (
                        <option value={med.id} key={i}> {med.nombre} </option>                                                     
                                    
                                        ))                      
                                }                                                 
                            
            
            </select>
          </label>
        </div>
  }



        <div className="form__item">
          <label htmlFor="fecha">
          <b>Dia y Hora:</b>            
          
          </label>
          
           <input  type="datetime-local" step = "2" name = "fechcita"  value = {reserva.fechcita} onChange ={(e)=> {actualizarInput(e)}}/>          
       
      
        </div>

        <div className="form__item">
          <label htmlFor="monto">
          <input  type="number"  name = "importe" value = {reserva.importe} onChange ={(e)=> {actualizarInput(e)}}/>          
          </label>
        </div>

    
        <div className="form_item">
          <input type="submit"  className="button full" value="Reservar"/>
        </div>
      </form>

    </div>
  </div>
)
}
const mapStateToProps = state => ({
  especialidades: state.especialidadesReducer.especialidades,
  medicos: state.medicosReducer.medicos 
})

export default connect(mapStateToProps, {})(CitasReservar)