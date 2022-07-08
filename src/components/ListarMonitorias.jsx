import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteMonitoriaAsync, listarMonitoriasAsync } from "../redux/actions/actionMonitorias";
import EditarMonitorias from "./EditarMonitorias";
//la materia, el monitor asignado, la fecha y el salón.
const ListarMonitorias = () => {
  const [dataMonitoria, setDataMonitoria] = useState(" ");
  const [modal, setModal] = useState(false);

  const x = useDispatch();
  const { monitorias } = useSelector((store) => store.monitoriasStore);

  const handleEliminar = (materia) => {
    x(deleteMonitoriaAsync(materia));
  };

  const handleEditar = (Monitoria) => {
    setDataMonitoria(Monitoria);
    setModal(true);
  };

  

  useEffect (()=>{
    x(listarMonitoriasAsync());
    
},[x])
  return (
    <div>
      <div>
        {}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Materia</th>
              <th>Monitor</th>
              <th>Fecha</th>
              <th>Salon</th>
            </tr>
          </thead>
          <tbody>
            {monitorias.map((element, index) => {
              return (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{element.Materia}</td>
                  <td>{element.Monitor}</td>
                  <td>{element.Fecha}</td>
                  <td>{element.Salon}</td>
                  <td>
                    <Button
                      type="button"
                      variant="danger"
                      onClick={() => handleEliminar(element.Materia)}
                    >
                      Eliminar
                    </Button>

                    <Button
                      type="button"
                      variant="warning"
                      onClick={() => handleEditar(element)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {modal === true ? <EditarMonitorias dataMonitoria={dataMonitoria} /> : ""}
      </div>
    </div>
  );
};

export default ListarMonitorias;
