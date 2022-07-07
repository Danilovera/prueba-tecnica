import React from 'react'
import { Form,Button} from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../redux/actions/actionLogin';


const Container = styled.div`
    margin: auto;
    width: 50%;
`

const ContainerButtons = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled.button`
  width: 20%;
  height: 20%;
`

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
`

const Login = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch()
    
  }
  return (
    <Container >
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Correo Electronico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>contraseña</Form.Label>
        <Form.Control type="password" placeholder="contraseña" />
      </Form.Group>
      

    <ContainerButtons>

    <Button variant="primary" type="submit">
        Logearse
      </Button>

      <span>Registrarse con :</span>
      <ButtonStyled>
        <ImgStyled src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1657163434/google_fwzlxn.png" alt="" onClick={dispatch(loginGoogle)}/>
      </ButtonStyled>

      <ButtonStyled>
        <ImgStyled src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1657163439/facebook-icone_yda3g2.png" alt=""  />
      </ButtonStyled>
    </ContainerButtons>

    </Form>

    <Link to="/Register">Register</Link>
    </Container >
  )
}

export default Login