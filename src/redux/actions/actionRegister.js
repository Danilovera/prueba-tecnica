import { typeRegister } from "../types/types"
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"


export const actionRegisterASync = (email, password) =>{
    return(dispatch) => {

        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,password)
        .then(
            console.log("melo")
        )
        .catch(err => console.log(err))
    }

}

export const actionRegisterSync = (email, password) =>{
    return{
        type: typeRegister,
        payload: {email, password}
    }
}