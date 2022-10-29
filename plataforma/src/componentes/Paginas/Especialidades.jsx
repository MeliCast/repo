import React , { useEffect, useState } from 'react'
import store from '../../redux/store'
import { getAllEspecialidades } from '../../redux/actionCreators'
import { connect } from "react-redux"
import axios from "axios";

const Especialidades = ({match, especialidades }) => {

    const [especial, SetEspecial]=useState([              
    ])
    const API_URL = process.env.REACT_APP_API_URL
    
    const obtenerEspecialidad = async  () =>{

        try {        
            const {data }  = await axios.get(`${API_URL}/tipoespecialidad`);        
            return data
        } catch (error) {
            throw error;
            
        }
    
    };

    const getEspecialidad = async () => {
        try {
            const dataEspecialidad = await  obtenerEspecialidad();


            const objespecial = []  
      
//      console.log(datosprod)
        dataEspecialidad.map((ima,x) => {
         
               
            objespecial.push(ima.nombre )
        })
        SetEspecial(objespecial);
            
            
            
        } catch (error) {
            console.log(error);
        }
        
    };


    useEffect(() => {
        getEspecialidad();
        
        /*store.dispatch(getAllEspecialidades())*/
      }, [])
      
      
      
    
    return (

        
    <>
    
    
        <div className="main-banner img-container l-block">
            <div className="ed-grid">
                <div>
                    <img src="http://greenlinemedicalspecialists.co.ke/wp-content/uploads/doctor-banner.jpg"
                    alt="Banner_profesores"  />
                    <div className="main-banner__data s-right">
                                <h1 >&nbsp;</h1>
                                <p>&nbsp;</p>
                            <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="ed-grid">
            <h2>Especialidades</h2>  
            <p className="textoJustificado">La clínica Madre y Niño Sano pone a tu disposición una atención integral, contando con el respaldo de un equipo de médicos de reconocida trayectoria en cada una sus especialidades y demás profesionales de la salud altamente capacitados en sus respectivas áreas médicas o quirúrgicas, que te brindarán una trato amable y cálido en cada una de tus visitas.</p>        
        </div>

            
                
        
                <div className="ed-grid">
                
                <div className="titulo-1"><h2>{especial[0]}</h2></div>                  
    
                
            </div>
    
            <div className="ed-grid m-grid-3">
                <div className=" m-cols-2">
                        <p className="textoJustificado">La ginecología es una especialidad de la medicina que se centra en el estudio del sistema reproductor femenino. Los profesionales que se ocupan de esta especialidad se conocen como ginecólogos, que son los especialistas que atienden todas las patologías relacionadas con los órganos femeninos como el útero, la vagina y los ovarios, y también de la prevención de enfermedades futuras.</p>
                        <p className="textoJustificado">En el ámbito de la ginecología, se acompaña a la mujer a lo largo de toda su vida, desde la menarquía hasta la menopausia, para garantizar el buen funcionamiento de sus órganos reproductivos</p>
                </div>
                <div>
                    <img className="estiloImagen" src="https://aisafiv.com/wp-content/uploads/2019/11/que-es-la-ginecologia-zaragoza.jpg" alt="Ginecologia" />
                </div>
            </div>
    
    
    
            <div className="ed-grid">
                <div className="titulo-1"><h2>{especial[1]}</h2></div>  
            </div>
            <div className="ed-grid m-grid-3">
                <div className="m-cols-2">
                        <p className="textoJustificado">La pediatría es la especialidad médica y es la rama de la medicina que involucra la atención médica de bebés, niños y adolescentes. </p>
                        <p className="textoJustificado">la pediatría abarca desde el nacimiento hasta que el niño llegue a la adolescencia, normalmente hasta los 18 años incluso hay organismos internacionales que extienden la edad hasta los 21 años. Dentro de ella se distinguen varios periodos: recién nacido (0-6 días), neonato (7-29 días), lactante (lactante menor; 1-12 meses de vida, lactante mayor; 1-2 años), preescolar (3-5 años), escolar (6-11 años), puberto (12-14 años) y adolescente (15-18 años).</p>
                </div>
                <div>
                    <img className="estiloImagen" src="https://aisafiv.com/wp-content/uploads/2019/11/que-es-la-ginecologia-zaragoza.jpg" alt="Ginecologia" />
                </div>
            </div>
    
            <div className="ed-grid">
                <div className="titulo-1"><h2>{especial[2]}</h2></div>  
            </div>
            <div className="ed-grid m-grid-3">
                <div className="m-cols-2">   
                    <p className="textoJustificado">Es una dependencia que tiene la responsabilidad de planificar, adquirir, preparar, almacenar y distribuir, una alimentación adecuada a la comunidad hospitalaria, contribuyendo a la recuperación de la salud, a mantener y/o mejorar el estado nutricional del paciente hospitalizado, brindando una alimentación balanceada a costo razonable, preparadas en óptimas condiciones higiénicas y que se adapte a los hábitos alimentarios de la población atendida, programando y haciendo uso racional de los recursos del servicio. Además, ofrece consejería alimentaría nutricional a usuarios externos en: hospitalización, cuando son dados de alta, a usuarios ambulatorios en consulta externa, en patologías relacionadas o causadas por déficit y excesos alimentarios, como por ejemplo: diabetes, obesidad, dislipidemias, anemias, desnutrición, VIH, oncología, síndrome metabólico, entre otras</p>
                </div>
                <div>
                    <img className="estiloImagen" src="https://www.hospitallapaloma.com/wp-content/uploads/2017/12/nutricion-y-dietetica.jpg" alt="Ginecologia" />
                </div>
            </div>
    
            <div className="ed-grid">
                <div className="titulo-1"><h2>{especial[3]}</h2></div>  
            </div>
            <div className="ed-grid m-grid-3">
                <div className="m-cols-2">
                    <p className="textoJustificado">La odontología es una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, el cual incluye además de los dientes, las encías, el tejido periodontal, el maxilar superior, el maxilar inferior y la articulación temporomandibular. Las principales enfermedades de las que se ocupa la odontología son la caries dental, la maloclusión y la enfermedad periodontal.</p>
                </div>
                <div>
                    <img className="estiloImagen" src="https://www.hospitallapaloma.com/wp-content/uploads/2017/12/nutricion-y-dietetica.jpg" alt="Ginecologia" />
                </div>
    
            </div>
    
    
    
        
                
        
         
  
 
        
    </>
    
)
    }
    const mapStateToProps = state => ({
        especialidades: state.especialidadesReducer.especialidades
      })
export default connect(mapStateToProps, {})(Especialidades)
