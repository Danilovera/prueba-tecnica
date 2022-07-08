import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typeSearch } from "../types/types"


// Busquedad por el nombre



export const buscarNombreAsync = (nombres)=>{
    return async (dispatch)=>{
        const collectionCitas = collection(db, "Monitores")
        const q = query(collectionCitas, where("nombres", "==", nombres))
        const datosQ = await getDocs(q)
        let arr = []
  
        datosQ.forEach(async(element)=>{
            arr.push(element.data())
        })

        console.log(arr)
  
        .then(resp =>{
            dispatch(buscarNombreSync(nombres))
                    
        })
        .catch(error => console.log(error))
  
       
    }
  }
  
  


export const buscarNombreSync = (nombres)=>{
    return{
            type: typeSearch.buscarNombre,
            payload: nombres
    }
}