import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { actionLogoutAsync } from '../redux/actions/actionLogin';
import { useDispatch } from 'react-redux/es/exports';

const NavbarStyled = styled.div`
display: flex;
justify-content: space-between;
background-color: black;
color: white;
`
const LinkStyled = styled(Link)`
    color: white;
    text-decoration: none;
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
`

const Navbar = () => {
    const dispatch = useDispatch()
  return (
    <NavbarStyled>
        <div>
            <span>
                Prueba tecnica
            </span>
        </div>
        <ContainerButtons>
        <Button> <LinkStyled to="/BusquedadMonitorias"> Filtro</LinkStyled></Button>
            <Button> <LinkStyled to="/monitores"> Monitores</LinkStyled></Button>
            <Button> <LinkStyled to="/monitorias">Monitorias</LinkStyled> </Button>
            <Button onClick={dispatch(actionLogoutAsync)}> Logouth</Button>
        </ContainerButtons>
    </NavbarStyled>
  )
}

export default Navbar