import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typeMonitores } from "../types/types";


export const agregarMonitoresAsync =  (formValue) => {
    return(dispatch)=>{
      addDoc(collection(db, "Monitores"), formValue)
        .then(()=>{
            console.log("se esta enviando ")
            dispatch(agregarMonitoresSync(formValue))
        })
    }
}


export const agregarMonitoresSync = (formValue) => {
  return {
    type: typeMonitores.agregar,
    payload:  formValue 
  }
}
