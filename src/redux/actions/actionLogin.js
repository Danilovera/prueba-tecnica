import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { typeLogin } from "../types/types"

// logearse
export const actionLoginAsync = (email, password) => {

  return (dispatch)=>{
   const auth = getAuth()
   signInWithEmailAndPassword(auth,email,password)
   .then(
      ()=>{
         console.log ("proceso exitoso")
         dispatch(actionLoginSync(email,password))
      }
   ).catch(err=> console.log(err))
  }
} 



export const actionLoginSync =(email,password) =>{
   return{
    type: typeLogin.login,
    payload:{email,password}
   }
}

//registrarse con google

export  const loginGoogle = ()=>{
   return (dispatch) => {
       console.log('dentro de google')
       const auth = getAuth()
       signInWithPopup(auth, google)
       .then( ({user})=>{
           console.log(user, 'Usuario Autorizado, Bienvenido')
       })
       .catch(error =>{
           console.warn(error, 'Usuario NO Autorizado')
       })
   }
}

// logout
export const actionLogoutAsync = ()=>{
   return (dispatch)=>{
       const auth = getAuth();
       signOut(auth)
       .then( ()=>{
         console.log("fuera")
         dispatch(actionLogoutSync())
       }     
       )
       .catch((error)=>{console.log(error)});
   }
}


 const actionLogoutSync = ()=>{
   return {
       type: typeLogin.logout
   }
}