import React, { useEffect } from 'react'
import store from '../../redux/store'
import { getAllMedicos } from '../../redux/actionCreators'
import { connect } from "react-redux"

const Medicos = ({match, medicos}) => {


    useEffect(() => {
        store.dispatch(getAllMedicos())
      }, [match])
    


    return (

        <>

                <div className="main-banner img-container l-block">
                    <div className="ed-grid">
                        <div>
                            <img src="https://gacetamedica.com/wp-content/uploads/2020/03/GettyImages-1059422002-scaled.jpg"
                            alt="Banner_medicos"  />
                            <div className="main-banner__data s-right">
                                        <h1 >&nbsp;</h1>
                                        <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <article className="ed-grid">
                        <h3>STAFF MÉDICOS</h3>    
                    </article>
                </div>


            {
                medicos &&
                <main  className="ed-grid m-grid-3 lg-grid-4 row-gap">
                    {      
                        medicos.map(m => (
                            <div key={m.id} className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2" >
                               { /*<img className="estiloImagen" src={m.foto} alt={m.nombre} />*/}
                                <p>
                                    <b>Nombre:</b> <br />{m.nombre}  <br /> 
                                    <b>Especialidad:</b><br /> {m.especialidadMed.nombre}   <br />
                                    <b>Email:</b><br /> {m.email}
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
    medicos: state.medicosReducer.medicos
  })


export default connect(mapStateToProps, {})(Medicos)

