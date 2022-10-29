import React, { useEffect } from 'react'
import store from '../../redux/store'
import { getAllProgramado } from '../../redux/actionCreators'
import { connect } from "react-redux"
 import moment  from 'moment'
 

const CitasProgramadas = ({match,programado}) =>  {

    useEffect(() => {
        store.dispatch(getAllProgramado())
    }, [match])


    return(
        <>
        <br/>
            <div className="ed-grid">
                <h1>Citas Programadas</h1>
            </div>
    
            {
                programado &&
                <main  className="ed-grid m-grid-3 lg-grid-4 row-gap">
                    {      
                        programado.map(p => (
                            <div key={p.id} className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2" >
                                <img src="https://thumbs.dreamstime.com/b/icono-de-calendario-y-reloj-cita-programada-concepto-fecha-importante-vector-la-administraci%C3%B3n-horas-del-parte-organizador-187123840.jpg" alt="imagen programado" />
                                <p>
                                    <b>Fecha:</b>  {moment(p.fechcita).format('DD-MM-YYYY') }<br /> 
                                    <b>Hora:</b>  {moment(p.fechcita).format('HH:mm:ss') } <br />
                                    <b>Especialidad:</b>  {p.especialidad.nombre} <br />
                                    <b>Médico:</b> {p.medico.nombre} <br />
                                    {/*<b>Paciente:</b>  {p.paciente} <br />*/}
                                    <b>Tipo de Cita:</b>  {p.tipocita} <br />
                                    {/*<b>Estado: </b><span className="premium-disscount s-mr-05 s-weight-semibold s-bg-yellow-500 s-color-white s-radius s-px-05" > {p.estado} </span><br />*/}
                                    <b>Monto: </b>  S/.{p.importe} <br />

                                </p>    
                            </div>
                        
                        ))
                    }
                </main>
            }

        </>
    )
}


const mapStateToProps = state => ({
    programado: state.programadoReducer.programado
})


export default connect(mapStateToProps, {})(CitasProgramadas)
