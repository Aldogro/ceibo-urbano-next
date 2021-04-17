import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { Provider } from 'react-redux'
import { ConfigProvider } from '../services/Config.context'
import { PromoProvider } from '../services/Promo.context'
import { CartProvider } from '../services/Cart.context'
import { SnackbarProvider } from 'notistack'
import { isoLogo } from '../utils/catalog'

import store from '../redux/store'

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
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <ConfigProvider>
            <CartProvider>
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
            </CartProvider>
          </ConfigProvider>
        </SnackbarProvider>
      </Provider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}