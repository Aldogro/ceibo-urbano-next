import React from 'react'
import AppAppBar from '../components/AppAppBar'
import ProductHero from '../components/ProductHero'
import ProductValues from '../components/ProductValues'
import ProductCategories from '../components/ProductCategories'
import ProductHowItWorks from '../components/ProductHowItWorks'
import ProductSmokingHero from '../components/ProductSmokingHero'
import PromoCategories from '../components/PromoCategories'
import AppFooter from '../components/AppFooter'

export default function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <PromoCategories />
      <ProductValues />
      <ProductSmokingHero />
      <ProductHowItWorks />
      <ProductCategories />
      <AppFooter />
    </React.Fragment>
  )
}