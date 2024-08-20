import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  // width: 450px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px); // para borrar o fundo do container
  border: 2px solid red;
  padding: 40px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
