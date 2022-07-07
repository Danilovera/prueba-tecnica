import { typeLogin } from "../types/types";

export const loginRucers = (state ={}, action) =>{

    switch (action.type) {
        case typeLogin.login:
            
            return{
                email: action.payload.email,
                password: action.payload.password
            }

            case typeLogin.logout:
                return{
                    
                }
    
        default:
            return state;
    }

}