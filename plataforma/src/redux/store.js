import {createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
    especialidadesReducer,
    medicosReducer,
    historialReducer,
    programadoReducer
} from "./reducers"


export default createStore(
    combineReducers({
        especialidadesReducer,
        medicosReducer,
        historialReducer,
        programadoReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))

)
