import React, { useEffect, useState } from 'react'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useRoutes, Link } from "react-router-dom"
import ProductListBuy from './ProductListBuy';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const [total, setTotal] = useState(0)
    const [amount, setAmount] = useState(null)

    const [activateResponsiveMenu, setActivateResponsiveMenu] = useState(Boolean)
    const [activateCart, setActivateCart] = useState(Boolean)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProductsData()
    }, [])



    const fetchProductsData = async () => {
        const url = `${process.env.REACT_APP_BACKED_URL}/cart`
        const response = await fetch(url)
        const product = await response.json()
        setProducts(product)

        let finalPrice = 0;
        for (let i = 0; i < product.length; i++) {
            if (product[i].amount >= 1) {

                let priceParsed = Number(product[i].amount * product[i].price)
                finalPrice += priceParsed
            }
        }
        setTotal(finalPrice)
    }
    return (
        <>
            <header>
                <nav className="navBarDesktop">
                    <h2 className="mark">Lorem Ipsum Bakery</h2>
                    <ul className='list'>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/Alta">Alta</Link> </li>
                        <li> <Link to="/Contact">Contact with us</Link> </li>
                    </ul>

                    <div className="searchContainer">
                        <HiMiniMagnifyingGlass className="iconSearch" />
                        <input type="text" className="searchInput" placeholder="Buscar..." />
                    </div>

                    <div className="cartButtonContainer">
                        <FaShoppingCart className="cartIcon" onClick={() => setActivateCart(!activateCart)} />
                        <p className="cartCounter"></p>
                    </div>
                </nav>

                {/* RESPONSIVE MENU */}
                <nav className={activateResponsiveMenu ? "responsiveNavBar active" : "responsiveNavBar"} >
                    <ul className="responsiveList">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/Alta">Alta</Link> </li>
                        <li> <Link to="/Contact">Contact with us</Link> </li>
                        <li><input type="text" className="inputSearchRespsonsive" placeholder="Buscar..." /></li>
                    </ul>
                    <h2 className="mark">Lorem Ipsum Bakery</h2>

                    <div className="responsiveCartButtonContainer">
                        <FaShoppingCart className="cartIcon" onClick={() => setActivateCart(!activateCart)} />
                        <p className="cartCounter"></p>
                    </div>
                    <FaBars id="responsiveMenuIcon" onClick={() => setActivateResponsiveMenu(!activateResponsiveMenu)} />
                </nav>
            </header>


            {/* BuyList */}
            <div className={activateCart ? "cartContainer active" : "cartContainer"}>
                <div className="listTitleContainer">
                    <h1>YOUR CART</h1>
                    <FaXmark className='XIcon' onClick={() => setActivateCart(!activateCart)} />
                </div>
                <div className="cartListOrder">
                    {products.length > 0 ? <ProductListBuy products={products} /> : "Not products Found"}
                    <h1>Total : ${total}</h1>
                </div>
            </div>
        </>
    )
}

export default Header