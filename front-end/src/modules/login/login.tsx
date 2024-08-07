import React from 'react';
import Button from '@/components/button'
import Container from '@/modules/login/components/container'

const Login = () => {
  return (
      <Container>
        <Button $provider="google">
          Login com Google
        </Button>

        <Button $provider="github">
          Login com GitHub
        </Button>

        <Button $provider="facebook">
          Login com Facebook
        </Button>
      </Container>
  )
}

export default Login