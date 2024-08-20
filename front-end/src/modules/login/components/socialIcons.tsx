import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { SiGithub } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'

// No contexto do styled-components, colocar $ (ou qualquer outro prefixo)
// é uma forma comum de diferenciar as props que são usadas somente para estilização com as props que são usadas pra lógica/conteúdo.
interface IconProps {
  $provider: 'google' | 'github' | 'facebook' | 'default'
}

const IconWrapper = styled.div<IconProps>`
  ${({ $provider }) => {
    switch ($provider) {
      case 'facebook':
        return `
      margin-left: 20px;
      `
      default:
        return ''
    }
  }}
`

const SocialIcons: React.FC<IconProps> = ({ $provider }) => {
  const icons = {
    google: <FcGoogle size={24} />,
    github: <SiGithub size={24} />,
    facebook: <FaFacebook size={24} />,
    default: '',
  }

  return <IconWrapper $provider={$provider}>{icons[$provider]}</IconWrapper>
}

export default SocialIcons
