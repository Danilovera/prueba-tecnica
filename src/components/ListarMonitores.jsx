import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteMonitorAsync, listarMonitoresAsync } from "../redux/actions/actionMonitores";
import EditarMonitores from "./EditarMonitores";

const ListarMonitores = () => {

const [dataMonitor, setDataMonitor]= useState(" ")
const [modal, setModal] = useState(false)

  const x = useDispatch();
  const { monitores } = useSelector((store) => store.monitoresStore);

const handleEliminar =(cedula) =>{
    x(deleteMonitorAsync(cedula))
    
}

const handleEditar=(dataMonitor)=>{
    setDataMonitor(dataMonitor)
    setModal(true)
}

  useEffect(() => {
    x(listarMonitoresAsync());
  },[x]);
  return (
    <div>
      {}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>apellidos</th>
            <th>Programa academico</th>
            <th>Semestre</th>
            <th>Cedula</th>
          </tr>
        </thead>
        <tbody>
          {monitores.map((element, index) => {
            return (
              <tr key={index} style={{ textAlign: "center" }}>
                <td>{element.nombres}</td>
                <td>{element.apellidos}</td>
                <td>{element.programaAcademico}</td>
                <td>{element.semestre}</td>
                <td>{element.cedula}</td>
                <td>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={()=>handleEliminar(element.cedula)}
                  >
                    Eliminar
                  </Button>
                  
                  <Button
                    type="button"
                    variant="warning"
                    onClick={()=>handleEditar(element)}
                  >
                    Editar
                  </Button>
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {
                modal === true ? <EditarMonitores dataMonitor={dataMonitor} /> : ''
            }

            
    </div>
  );
};

export default ListarMonitores;
