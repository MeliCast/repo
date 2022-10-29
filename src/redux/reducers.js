import { 
    GET_ALL_ESPECIALIDADES, GET_ALL_MEDICOS,GET_ALL_PROGRAMADO, GET_ALL_HISTORIAL,
    GET_ESPECIALIDAD
} from "./actions"

export const programadoReducer = (state={}, action) => {

    if(action.type === GET_ALL_PROGRAMADO){
        return {
            ...state,
            programado: action.programado
        }
    }
    return state  
}

export const historialReducer = (state={}, action) => {

    if(action.type === GET_ALL_HISTORIAL){
        return {
            ...state,
            historial: action.historial
        }
    }
    return state  
}

export const medicosReducer = (state={}, action) => {

    if(action.type === GET_ALL_MEDICOS){
        return {
            ...state,
            medicos: action.medicos
        }
    }
    return state  
}





export const especialidadesReducer = (state={}, action) => {

    if(action.type === GET_ALL_ESPECIALIDADES){
        return {
            ...state,
            especialidades: action.especialidades
        }
    }

    if(action.type === GET_ESPECIALIDAD){
        return {
            ...state,
            especialidad: action.especialidad
        }
    } 
    return state 
}


