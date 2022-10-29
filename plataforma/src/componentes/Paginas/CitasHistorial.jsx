import React, { useEffect } from 'react'
import store from '../../redux/store'
import { getAllHistorial } from '../../redux/actionCreators'
import { connect } from "react-redux"


const CitasHistorial = ({match, historial}) => {

    useEffect(() => {
        store.dispatch(getAllHistorial())
    }, [match])


    return(
        <>  
            <br/>
            <div className="ed-grid ">
                <h1>Historial de Citas</h1>


                        { 
                            historial &&

                                    historial.map( h => (
                                               
                                        <div key={h.id} className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2 estiloFila" >  
                                            <div className="ed-grid m-grid-4 lg-grid-7 ">
                                  
                                                <div><b>Fecha:</b>  {h.fecha} </div>
                                                <div><b>Hora:</b>  {h.hora}</div>
                                                <div><b>Especialidad:</b>  {h.especialidad}</div>
                                                <div><b>Médico:</b> {h.medico} </div>
                                                <div><b>Paciente:</b>  {h.paciente} </div>
                                                <div><b>Tipo de Cita:</b>  {h.tipocita}</div>
                                                <div><b>Estado: </b><span className="premium-disscount s-mr-05 s-weight-semibold s-bg-green-500 s-color-white s-radius s-px-05" > {h.estado} </span></div>
                                            </div>
                                        </div>

                                        
                                    ))

                        }
             

                
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    historial: state.historialReducer.historial
  })

export default connect(mapStateToProps, {})(CitasHistorial)
