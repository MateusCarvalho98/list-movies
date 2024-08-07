import '@/styles/globals.css' 
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react'

const domain: string = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '';
const clientId: string = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider 
      domain={domain} 
      clientId={clientId}
      authorizationParams={{
        redirect_uri: '/'//window.location.origin,  // maneira recomendada de especificar o URI de redirecionamento ao usar o Auth0 Provider
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>  
  )
}

export default MyApp;
