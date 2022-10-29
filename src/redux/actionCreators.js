import { get } from "axios";
import { 
    GET_ALL_ESPECIALIDADES,
    GET_ALL_MEDICOS,
    GET_ALL_HISTORIAL,
    GET_ALL_PROGRAMADO,

    GET_ESPECIALIDAD
} from "./actions";


const API_URL = process.env.REACT_APP_API_URL

export const getAllProgramado = () => dispatch => {
    get(`${API_URL}/reserva`)
    .then(resp => {
        return dispatch({
          type: GET_ALL_PROGRAMADO,
          programado: resp.data
        })
      }
    )
}

export const getAllHistorial = () => dispatch => {
    get(`${API_URL}/historial`)
    .then(resp => {
        return dispatch({
          type: GET_ALL_HISTORIAL,
          historial: resp.data
        })
      }
    )
}

export const getAllMedicos = () => dispatch => {
    get(`${API_URL}/medicos`)
    .then(resp => {
        return dispatch({
          type: GET_ALL_MEDICOS,
          medicos: resp.data
        })
      }
    )
}

export const getAllEspecialidades = () => dispatch => {
   get(`${API_URL}/tipoespecialidad`)
   .then(resp => {
           return dispatch({
               type: GET_ALL_ESPECIALIDADES,
               especialidades: resp.data
               
           })
           
       } 
    )
  ;
}




/*    --------------  De Uno  -------------------     */


export const getEspecilidad = id => dispatch => {
    get(`${API_URL}/especialidades/${id}`)
    .then(resp => {
           return dispatch({
               type: GET_ESPECIALIDAD,
               especilidad: resp.data
           })
       } 
    )
}
