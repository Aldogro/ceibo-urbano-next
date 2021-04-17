import React from 'react'
import MainLayout from '../components/MainLayout'
import ProductHero from '../components/ProductHero'
import ProductValues from '../components/ProductValues'
import ProductCategories from '../components/ProductCategories'
import ProductHowItWorks from '../components/ProductHowItWorks'
import ProductSmokingHero from '../components/ProductSmokingHero'
import PromoCategories from '../components/PromoCategories'

export default function Index() {
  return (
    <React.Fragment>
      <MainLayout>
        <ProductHero />
        <PromoCategories />
        <ProductValues />
        <ProductSmokingHero />
        <ProductHowItWorks />
        <ProductCategories />
      </MainLayout>
    </React.Fragment>
  )
}