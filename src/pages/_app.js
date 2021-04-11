import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { ConfigProvider } from '../services/Config.context'
import { AuthProvider } from '../services/Auth.context'
import { ProductProvider } from '../services/Product.context'
import { PromoProvider } from '../services/Promo.context'
import { CartProvider } from '../services/Cart.context'
import { SnackbarProvider } from 'notistack'
import { isoLogo } from '../utils/catalog'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <SnackbarProvider maxSnack={3}>
        <ConfigProvider>
          <AuthProvider>
            <CartProvider>
              <ProductProvider>
                <PromoProvider>
                  <Head>
                    <title>Ceibo Urbano</title>
                    <link rel="shortcut icon" href={isoLogo} />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                  </Head>
                  <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                  </ThemeProvider>
                </PromoProvider>
              </ProductProvider>
            </CartProvider>
          </AuthProvider>
        </ConfigProvider>
      </SnackbarProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}