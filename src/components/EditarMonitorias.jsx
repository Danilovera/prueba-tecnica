import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux/es/exports';
import useForm from '../hooks/useForm';
import { editMonitoriasAsync } from '../redux/actions/actionMonitorias';

const EditarMonitorias = ({dataMonitoria}) => {

    const dispatch = useDispatch();

    //-----------Activacion del Modal-----------------------------------//
    const [show, setShow] = useState(true);
    //-----------------cerrar------------------------//
    const handleClose = () => setShow(false);
  
    //-------------------Manipulación del Formulario y lograr Editar----------------------------//
    const [reset, handleInputChange, formValue] = useForm({
        Materia:dataMonitoria.Materia,
        Monitor:dataMonitoria.Monitor,
        Fecha:dataMonitoria.Fecha,
        Salon: dataMonitoria.Salon,
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValue);
      dispatch(editMonitoriasAsync(formValue));
      handleClose();
      reset();
    };
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar</Modal.Title>
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
          <Form.Label>Materia</Form.Label>
          <Form.Control type="text" placeholder="Materia" name="Materia" value={formValue.Materia} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Monitor</Form.Label>
          <Form.Control type="text" placeholder="Monitor"  name="Monitor" value={formValue.Monitor} onChange={handleInputChange}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" placeholder="Fecha" name="Fecha" value={formValue.fecha} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salon</Form.Label>
          <Form.Control type="number" placeholder="Salon"  name="Salon" value={formValue.Salon} onChange={handleInputChange} />
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
  )
}

export default EditarMonitorias