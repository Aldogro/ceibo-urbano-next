import React from 'react'
import AppAppBar from './AppAppBar'
import AppFooter from './AppFooter'

const MainLayout = ({ children }) => {
  return (
    <>
      <AppAppBar />
      { children }
      <AppFooter />
    </>
  )
}

export default MainLayout