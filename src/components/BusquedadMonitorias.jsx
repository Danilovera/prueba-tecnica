import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
//nombres, apellidos, programa académico, semestre, cédula
import useForm from '../hooks/useForm'
import { buscarNombreAsync } from '../redux/actions/actionsBusquedad'

const BusquedadMonitorias = () => {

  const dispatch = useDispatch()

  const [ reset, handleInputChange,formValue] = useForm({
    valor:"",
    
})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formValue)
  dispatch(buscarNombreAsync(formValue))
  reset()

}
  return (
    <div>
      <h1>Busca por cualquiera de los filtros</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Buscar</Form.Label>
          <Form.Control type="text" placeholder="Busquedad" name="valor" value={formValue.valor} onChange={handleInputChange} />
        </Form.Group>

        
      
        <Button variant="primary" type="submit">
          Buscar por nombre
        </Button>
      </Form>

    </div>
  )
}


 


export default BusquedadMonitorias