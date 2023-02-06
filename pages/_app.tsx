import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

// Icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faLinkedin,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

// Components
import Layout from '../components/Layout'

config.autoAddCss = false
library.add(faLinkedin, faGithub, faWhatsapp)

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial;
    }

    html{
        font-size: 62.5%;
    }

    :root{
      --primary-color:#3988d2;
      --primary-dark-color:#2464a3;
      --secondary-color:#6ae395;

      --x1: 0.4rem;
      --x2: 0.8rem;
      --x3: 1.2rem;
      --x4: 1.6rem;
      --x5: 2.0rem;
      --x6: 2.4rem;
      --x7: 2.8rem;
      --x8: 3.2rem;
      --x9: 3.6rem;
      --x10: 4rem;
    }
`

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
