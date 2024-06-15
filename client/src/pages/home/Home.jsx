import React from 'react'
import Sliderr from '../../components/Slider/Sliderr'
import "./home.scss"
import Featured from '../../components/Featured/Featured'
import Categories from '../../components/categories/Categories'
const Home = () => {
  return (
    <div className='home'>
      <Sliderr/>
      <Featured type="Trending Now" />
      <h1 style={{fontSize: "40px", paddingLeft: "200px"}}>Explore</h1>
      <Categories/>
      <Featured type="top picks" />
    </div>
  )
}

export default Home