import React from 'react'
import List from '../../components/List/List'

const AllProducts = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{fontSize: "40px", color: "gray"}}>All Products Available</h1>
        <List query="/products?populate=*"/>
    </div>
  )
}

export default AllProducts