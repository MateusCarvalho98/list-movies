import styled, { css } from 'styled-components'
import SocialIcons from '@/modules/login/components/SocialIcons'

//provider = provedores
interface ButtonProps {
  $provider: 'google' | 'github' | 'facebook' | 'default' // aqui eu coloquei 3 provedores para que cada um tenha seu estilo depois
  children: React.ReactNode
}

const providerStyles = {
  //Uitilizei a função css`` para implementar blocos de estilização nos providers
  google: css`
    background-color: white;
    color: black;

    &:hover {
      background-color: #d3d3d3;
    }
  `,
  github: css`
    background-color: black;
    color: white;

    &:hover {
      background-color: #24292e;
    }
  `,
  facebook: css`
    background-color: #1877f2;
    color: white;

    &:hover {
      background-color: #155dbd;
    }
  `,
  default: css`
    background-color: white;
    color: black;

    &:hover {
      background-color: #d3d3d3;
    }
  `,
}

const StyledButton = styled.button<ButtonProps>`
  width: 400px;
  height: 45px;
  padding: 8px 16px;

  border: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-shadow: none;

  cursor: pointer;

  font-size: 16px;
  font-weight: 700;

  display: flex;

  justify-content: center;
  align-items: center;
  gap: 15px;

  ${({ $provider }) => providerStyles[$provider]}
`

const Button: React.FC<ButtonProps> = ({ $provider, children }) => {
  return (
    <StyledButton $provider={$provider}>
      <SocialIcons $provider={$provider} />
      {children}
    </StyledButton>
  )
}

export default Button
