import React from 'react'
import { Button, Form } from 'react-bootstrap'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux/es/exports'
import { agregarMonitoriasAsync } from '../redux/actions/actionMonitorias'
import ListarMonitorias from './ListarMonitorias'

//la materia, el monitor asignado, la fecha y el salón.

const Monitorias = () => {

  const [ reset, handleInputChange,formValue] = useForm({
    Materia:"",
    Monitor:"",
    Fecha:"",
    Salon: "",
})

const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        
        dispatch(agregarMonitoriasAsync(formValue))
        reset()
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        

      
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
      <hr />
      <ListarMonitorias />
    </div>
  )
}

export default Monitorias