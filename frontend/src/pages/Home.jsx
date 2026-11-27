import React from 'react'
import Header from '../components/Header'
import TopObat from '../components/TopObat'
import Banner from '../components/Banner'
import CategoryObat from '../components/CategoryObat'
import CategoryKlinikApotek from '../components/CategoryKlinikApotek'
import TopKlinikApotek from '../components/TopKlinikApotek'

const Home = () => {
  return (
    <div>
        <Header />
        <CategoryObat />
        <TopObat />
        <CategoryKlinikApotek />
        <TopKlinikApotek />
        <Banner />
    </div>
  )
}

export default Home