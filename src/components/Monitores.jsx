import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../hooks/useForm";
import { agregarMonitoresAsync } from "../redux/actions/actionMonitores";
import { useDispatch } from "react-redux/es/exports";
import ListarMonitores from "./ListarMonitores";



//De los monitores se desea almacenar: nombres, apellidos, programa académico,
// semestre, cédula, e información de contacto.

const Monitores = () => {

    const [ reset, handleInputChange,formValue] = useForm({
        nombres:"",
        apellidos:"",
        programaAcademico:"",
        semestre: "",
        cedula: "",
        informacionDeContacto:""
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(agregarMonitoresAsync(formValue))
        reset()
    }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Nombres" name="nombres" value={formValue.nombres} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Apellidos"  name="apellidos" value={formValue.apellidos} onChange={handleInputChange}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Programa Academico</Form.Label>
          <Form.Control type="text" placeholder="Programa academico" name="programaAcademico" value={formValue.programaAcademico} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Semestre</Form.Label>
          <Form.Control type="number" placeholder="Semestre"  name="semestre" value={formValue.semestre} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cedula</Form.Label>
          <Form.Control type="number" placeholder="Cedula" name="cedula" value={formValue.cedula} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Informacion de contacto</Form.Label>
          <Form.Control type="text" placeholder="Informacion de contacto" name="informacionDeContacto" value={formValue.informacionDeContacto} onChange={handleInputChange} />
        </Form.Group>

      
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <hr />
      <ListarMonitores/>
    </>
  );
};

export default Monitores;
