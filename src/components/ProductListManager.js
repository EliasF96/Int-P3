import React from 'react'
import ProductCardManager from "./ProductCardManager.js"

const ProductListManager = ({products}) =>{

    return (
            <ul className='productList'>
                {products.map((item, index) => (
                    <li key={index} id={index}>
                        <ProductCardManager product={item}/> 
                    </li>
                    
                ))}
            </ul>
    )
}
export default ProductListManager