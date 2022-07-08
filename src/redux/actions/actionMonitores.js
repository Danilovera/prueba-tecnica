import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typeMonitores } from "../types/types";

//agg


export const agregarMonitoresAsync =  (formValue) => {
    return(dispatch)=>{
      addDoc(collection(db, "Monitores"), formValue)
        .then(()=>{
            console.log("se esta enviando ")
            
            dispatch(listarMonitoresAsync())
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
//listar 


export const listarMonitoresAsync = ()=>{
 return async(dispatch)=>{
  const collecionMonitores = await getDocs(collection(db,"Monitores")) 
  console.log(collecionMonitores)
  const monitores = []
  collecionMonitores.forEach(element => {
    monitores.push({
      ...element.data()
    })
    
  });
  console.log(monitores)
  dispatch(listarMonitoresSync(monitores))
}
 }

export const listarMonitoresSync = (monitor)=>{
  return{
      type: typeMonitores.listar,
      payload: monitor
  }
}  
//eliminar

//--------------Eliminar 
export const deleteMonitorAsync = (cedula)=>{
  return async (dispatch)=>{
      const collectionMonitores = collection(db, "Monitores")
      const q = query(collectionMonitores, where("cedula", "==", cedula))

      const datosQ = await getDocs(q)
      console.log(datosQ)

      datosQ.forEach(docu =>{
          deleteDoc(doc(db, "Monitores", docu.id))
      })
      dispatch(actionDeleteMonitorSync(cedula))


}}

export const actionDeleteMonitorSync = (cedula) => {
  return {
      type: typeMonitores.eliminar,
      payload: cedula
  }
}

// editar


export const editMonitoresAsync = (dataMonitor)=>{
  return async (dispatch)=>{
      const collectionCitas = collection(db, "Monitores")
      const q = query(collectionCitas, where("cedula", "==", dataMonitor.cedula))
      const datosQ = await getDocs(q)
      let id = ''

      datosQ.forEach(async(element)=>{
          id = element.id
      })

      console.log(id)

      const docRef = doc(db, "Monitores", id)

      await updateDoc(docRef, dataMonitor)
      .then(resp =>{
          dispatch(editMonitoresSync(dataMonitor))
          dispatch(listarMonitoresAsync())
      
      })
      .catch(error => console.log(error))

     
  }
}

export const editMonitoresSync = (dataMonitor)=>{
  return {
      type: typeMonitores.editar,
      payload: {dataMonitor}

  }
}