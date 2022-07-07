import React from 'react'
import styled from 'styled-components'
import {Form,Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import useForm from "../hooks/useForm"
import { Link } from "react-router-dom";
import { actionRegisterASync } from '../redux/actions/actionRegister'

// estilizacion
const Container = styled.div`
    margin: auto;
    width: 50%;
`






const Register = () => {


  const [ reset, handleInputChange,formValue] = useForm({

    email: '',
    password: '',
   
})

  const dispatch = useDispatch()

const { email, password} = formValue

const handleSubmit = (e) =>{
e.preventDefault()
console.log(email, password)

dispatch(actionRegisterASync(email,password))
reset()
alert("usuario registrado exitosamente, volver a login")
}
  return (
    <Container >
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Correo Electronico" name='email' value={formValue.email} onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="contraseña" name="password" value={formValue.password} onChange={handleInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
    <Link to="/login">volver a login</Link>
    </Container >
  )
}

export default Register