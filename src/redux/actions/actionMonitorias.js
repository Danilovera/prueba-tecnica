import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typeMonitorias } from "../types/types";


//agg



export const agregarMonitoriasAsync =  (formValue) => {
    return(dispatch)=>{
      addDoc(collection(db, "Monitorias"), formValue)
        .then(()=>{
            console.log("se esta enviando ")
            
            dispatch(listarMonitoriasAsync())
            dispatch(agregarMonitoriasSync(formValue))
        })
    }
}


export const agregarMonitoriasSync = (formValue) => {
  return {
    type: typeMonitorias.agregar,
    payload:  formValue 
  }
}
//listar 


export const listarMonitoriasAsync = ()=>{
 return async(dispatch)=>{
  const collecionMonitorias = await getDocs(collection(db,"Monitorias")) 
  console.log(collecionMonitorias)
  const monitorias = []
  collecionMonitorias.forEach(element => {
    monitorias.push({
      ...element.data()
    })
    
  });
  console.log(monitorias)
  dispatch(listarMonitoriasSync(monitorias))
}
 }

export const listarMonitoriasSync = (monitoria)=>{
  return{
      type: typeMonitorias.listar,
      payload: monitoria
  }
}  
//eliminar

//--------------Eliminar 
export const deleteMonitoriaAsync = (materia)=>{
  return async (dispatch)=>{
      const collectionMonitorias = collection(db, "Monitorias")
      const q = query(collectionMonitorias, where("Materia", "==", materia))

      const datosQ = await getDocs(q)
      

      datosQ.forEach(docu =>{
          deleteDoc(doc(db, "Monitorias", docu.id))
      })
      dispatch(actionDeleteMonitorSync(materia))
     


}}

export const actionDeleteMonitorSync = (materia) => {
  return {
      type: typeMonitorias.eliminar,
      payload: materia
  }
}

// editar


export const editMonitoriasAsync = (dataMonitoria)=>{
  return async (dispatch)=>{
      const collectionCitas = collection(db, "Monitorias")
      const q = query(collectionCitas, where("Materia", "==", dataMonitoria.Materia))
      const datosQ = await getDocs(q)
      let id = ''

      datosQ.forEach(async(element)=>{
          id = element.id
      })

      console.log(id)

      const docRef = doc(db, "Monitorias", id)

      await updateDoc(docRef, dataMonitoria)
      .then(resp =>{
          dispatch(editMonitoriasSync(dataMonitoria))
          dispatch(listarMonitoriasAsync())
      
      })
      .catch(error => console.log(error))

     
  }
}

export const editMonitoriasSync = (dataMonitoria)=>{
  return {
      type: typeMonitorias.editar,
      payload: {dataMonitoria}

  }
}