import { typeSearch } from "../types/types"

const initialState = {
    busquedad : []
}

export const busquedadReducers = (state = initialState, action) => {
    switch (action.type) {

        case typeSearch.buscarNombre:
        return{
                 busquedad : action.payload
        } 

        case typeSearch.buscarApellido:
        return{
                 busquedad : action.payload
        } 

        case typeSearch.buscarCedula:
        return{
                 busquedad : action.payload
        } 

        case typeSearch.buscarPrograma:
        return{
                 busquedad : action.payload
        } 

        case typeSearch.buscarSemestre:
        return{
                 busquedad : action.payload
        } 
            
            
    
        default:
            return (state)
    }
}