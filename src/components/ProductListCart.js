import React from 'react'
import ProductCardCart from "./ProductCardCart.js"

const ProductListCart = ({products}) =>{

    return (
            <ul className='productList'>
                {products.map((item, index) => (
                    <li key={index} id={index}>
                        <ProductCardCart product={item}/> 
                    </li>
                    
                ))}
            </ul>
    )
}
export default ProductListCart