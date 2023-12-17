import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductForm } from './ProductForm';
import ProductList from './ProductListManager';
import Header from './Header';
import Footer from './Footer';
export const Alta = () => {
    const [activate, setActivate] = useState(Boolean)
    const [products, setProducts] = useState([])
    //CARGAR PRODUCTOS DE MOCK API
    useEffect(() => {
        fetchProductsData()
    }, [])

    const fetchProductsData = async () => {
        const url = process.env.REACT_APP_BACKED_URL+"/products"
        // fetch(url)
        //.then(response => console.log(response))
        //EN VEZ DE ESTE MODO , USAMOS ASYNC AWAIT QUE ES MAS MODERNO 
        const response = await fetch(url)
        const data = await response.json()
        // console.log(response)
        setProducts(data)
    }
    return (
        <>
            <Header />
            <h1>Alta</h1>

            <div className={activate ? "productForm  open" : "productForm"} >
                <ProductForm fetchData={fetchProductsData} />
            </div>
            {/*CARGAR PRODUCTOS */}
            {products.length > 0 ? <ProductList products={products}></ProductList>
                : "Not products Found"}
            <Footer/>
        </>
    )
}