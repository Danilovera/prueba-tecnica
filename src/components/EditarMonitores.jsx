import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux/es/exports";
import { editMonitoresAsync } from "../redux/actions/actionMonitores";

const EditarMonitores = ({dataMonitor}) => {
  const dispatch = useDispatch();

  //-----------Activacion del Modal-----------------------------------//
  const [show, setShow] = useState(true);
  //-----------------cerrar------------------------//
  const handleClose = () => setShow(false);

  //-------------------Manipulación del Formulario y lograr Editar----------------------------//
  const [reset, handleInputChange, formValue] = useForm({
    nombres: dataMonitor.nombres,
    apellidos: dataMonitor.apellidos,
    programaAcademico: dataMonitor.programaAcademico,
    semestre: dataMonitor.semestre,
    cedula: dataMonitor.cedula,
    informacionDeContacto:dataMonitor.informacionDeContacto,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(editMonitoresAsync(formValue));
    handleClose();
    reset();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Monitor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}
          >
            <h1 style={{ textAlign: "center", color: "blue" }}>
              Editar 
            </h1>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombres"
                name="nombres"
                value={formValue.nombres}
                onChange={handleInputChange}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                value={formValue.apellidos}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Programa Academico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Programa academico"
                name="programaAcademico"
                value={formValue.programaAcademico}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Semestre</Form.Label>
              <Form.Control
                type="number"
                placeholder="Semestre"
                name="semestre"
                value={formValue.semestre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cedula</Form.Label>
              <Form.Control
              disabled
                type="number"
                placeholder="Cedula"
                name="cedula"
                value={formValue.cedula}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Informacion de contacto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Informacion de contacto"
                name="informacionDeContacto"
                value={formValue.informacionDeContacto}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" variant="info">
              Editar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditarMonitores;
