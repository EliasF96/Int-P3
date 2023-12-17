import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsTrash2 } from "react-icons/bs";
import Image from 'react-bootstrap/Image';

const ProductCardBuy = ({ product }) => {

    const deleteProduct = async (id) => {
        try {
            let confirm = window.confirm("confirm delete this product?");
            if (confirm) {
                fetch(`${process.env.REACT_APP_BACKED_URL}/cart/${id}`, {
                    method: "DELETE",
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

            } else {
                toast.error("Action Denied!")
            }
        } catch (e) {
            toast.error("error: " + e)
        }
    }

    return (
        <>
            <Card className='productCardBuy' >
                <Card.Body>
                    <Card.Title style={{ color: "Red" }}><strong>{product.name}</strong></Card.Title>
                    <Image src={product.image} thumbnail alt={product.name} />
                    <Card.Text>Price: {product.price} </Card.Text>
                    <Card.Text> Delivery: {product.freeDelivery}</Card.Text>
                    <Card.Text> Amount: {product.amount}</Card.Text>
                    <Button variant="outline-danger" onClick={() => deleteProduct(product._id)}><BsTrash2/></Button>
                </Card.Body>
            </Card>
            <ToastContainer />
        </>
    )
}
export default ProductCardBuy