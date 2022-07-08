import { typeRegister } from "../types/types";


export const registerReducer=(state = {}, action) => {
    switch (action.type) {
        case typeRegister:
            return{
                email: action.payload.email,
                password: action.payload.password
            }
    
        default:
            return(state)
    }
}