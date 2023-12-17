
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
const ProductCardCart = ({ product }) => {
    const [id, setIdBuy] = useState(0)
    const [amount, setAmount] = useState(0)
    const [productBuy, setProductBuy] = useState([])

    const addProductToCart = async (id) => {
        console.log(id)
        try {
            const url = `${process.env.REACT_APP_BACKED_URL}/products/${id}`
            const response = await fetch(url)
            const data = await response.json()
            data.amount = amount //SET A AMOUNT OF ITEMS
            let confirm = window.confirm("Confirm Buy this product?");
            if (confirm) {
                fetch(process.env.REACT_APP_BACKED_URL + "/cart", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then(response => {
                        return response.json()
                            .then(msg => {
                                return toast.success(msg.message)
                            })
                    })
                    .catch(error => console.log(error))
                setInterval(() => {
                    window.location.reload()
                }, 1000);
                setIdBuy(id + 1)
            } else {
                toast.error("Action Denied!")
            }
        } catch (e) {
            toast.error("error: " + e)
        }
    }

    return (
        <>
            <Card className='productCard' >
                <Card.Body>
                    <Card.Title><strong>{product.name}</strong></Card.Title>
                    <Card.Text> {product.descShort}</Card.Text>
                    <Image src={product.image} thumbnail alt={product.name} />
                    <Card.Text ><strong>Price: </strong>${product.price} </Card.Text>
                    <Card.Text><strong>Stock: </strong>{product.stock} </Card.Text>
                    <Card.Text> <strong>Mark: </strong>{product.mark}</Card.Text>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item className='largeDescContainer' eventKey="1">
                            <Accordion.Header>More info...</Accordion.Header>
                            <Accordion.Body>
                                <Card.Subtitle className="mb-1 text-muted">{product.descLarge}</Card.Subtitle>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className='amountContainer'>
                        <Button variant="outline-primary" onClick={() => setAmount(amount - 1)} disabled={amount <= 0 ? true : false}><CgMathMinus /></Button>
                        Amount: {amount}
                        <Button variant="outline-primary" onClick={() => setAmount(amount + 1)}><CgMathPlus /></Button>
                    </div>
                    <Button variant="outline-success" disabled={!amount?true:false} onClick={() => addProductToCart(product._id)}>Buy</Button>
                </Card.Body>
            </Card>
            <ToastContainer />
        </>
    )
}
export default ProductCardCart