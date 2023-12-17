import React, { useEffect, useState } from 'react'
import ProductCardCart from './ProductListCart';
import Header from './Header';
import Footer from './Footer';
export const Home = () => {
  const [activate, setActivate] = useState(Boolean)
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProductsData()
  }, [])
  const fetchProductsData = async () => {
    const url = `${process.env.REACT_APP_BACKED_URL}/products`
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      setProducts(data)   
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <Header />
      <h1>Home site</h1>
      <picture className="pictureContainer">
        <img className="logoPrincipal" src="https://i.ibb.co/r5HqP4r/logo.jpg" alt="LogoPrincipal" />
      </picture>
      <h2 className="home-subtittle">Try our products made by the best french bakers</h2>
      {/*Load Product List */}
      {products.length > 0 ? <ProductCardCart products={products}></ProductCardCart>
        : "Not products Found"}
      <Footer />
    </>
  )
}