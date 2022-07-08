import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100wh;
`

const BackGround = styled.img`
  width: 100%;
  height: 50%;
`

const Inicio = () => {
  return (
    <Container>
      <BackGround src="https://res.cloudinary.com/dpyo5aklw/image/upload/v1657266060/d-programador-matrix-49432932_jbcmuk.jpg" alt="" />
    </Container>
  )
}

export default Inicio