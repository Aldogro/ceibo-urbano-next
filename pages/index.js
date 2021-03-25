import React from 'react'
import AppAppBar from '../modules/views/AppAppBar'
import ProductHero from '../modules/views/ProductHero'
import ProductValues from '../modules/views/ProductValues'
import ProductCategories from '../modules/views/ProductCategories'
import ProductHowItWorks from '../modules/views/ProductHowItWorks'
import ProductCTA from '../modules/views/ProductCTA'
import ProductSmokingHero from '../modules/views/ProductSmokingHero'
import PromoCategories from '../modules/views/PromoCategories'
import AppFooter from '../modules/views/AppFooter'

export default function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <ProductValues />
      <ProductSmokingHero />
      <ProductHowItWorks />
      <PromoCategories />
      {/* <ProductCTA /> */}
      <AppFooter />
    </React.Fragment>
  )
}