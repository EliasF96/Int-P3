import React, { useState } from 'react';
import { Form, Button, CardImg, CardText } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import Header from "./Header"
import Footer from "./Footer"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaLocationDot } from 'react-icons/fa6';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const NameForm = () => {

  const [formCampsRegex, setFormCampsRegex] = useState([{
    "nameRegex": /^[A-Z][a-z]{0,9}$/,
    "emailRegex": /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  }])

  const [formCampValidation, setformCampValidation] = useState([{
    name: false, surname: false, email: false
  }])

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [Commentary, setCommentary] = useState("")

  //VALIDATIONS
  const validateName = (event) => {
    setName(event)
    //RECORRER UN OBJETO USANDO FOR IN
    // for (let key in formCampValidation) {
    //   console.log("item "+key, "Value "+formCampValidation[key]);
    // }
    setformCampValidation({
      name: formCampsRegex[0].nameRegex.test(name),
      email: formCampValidation.email,
      surname: formCampValidation.surnames
    })
  };
  const validateSurname = (data) => {
    setSurname(data)
    setformCampValidation({
      name: formCampValidation.name,
      surname: formCampsRegex[0].nameRegex.test(surname),
      email: formCampValidation.email
    })
  };
  const validateEmail = (data) => {
    setEmail(data)
    setformCampValidation({
      name: formCampValidation.name,
      email: formCampsRegex[0].emailRegex.test(email),
      surname: formCampValidation.surname
    })
  };
  //ONSUBMIT VALIDATE EACH CAMP AND NOTIFY INVALID CAMPS
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formCampValidation)
    if (!formCampValidation.name) {
      toast.error(`Fill the name Camp!`)
    } else if (!formCampValidation.surname) {
      toast.error(`Fill the surname camp!`)
    } else if (!formCampValidation.email) {
      toast.error(`Fill the Email camp!`)
    } else {
      toast.success("Form completed successfully!")
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Header />
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Set your name"
            onChange={e => {
              validateName(e.target.value)
            }}
            isInvalid={!formCampValidation.name}
            isValid={formCampValidation.name}
          />
          <Form.Control.Feedback type="invalid">
            Required! Must contain only words and start with a Capital case. Max 10
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Valid!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="forSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Set your Surname"
            onChange={e => {
              validateSurname(e.target.value)
            }}
            isInvalid={!formCampValidation.surname}
            isValid={formCampValidation.surname}
          />
          <Form.Control.Feedback type="invalid">
            Required! Must contain only words and start with a Capital case. Max 10
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Valid!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email direction</Form.Label>
          <Form.Control
            type="email"
            placeholder="Set your em@il"
            onChange={e => {
              validateEmail(e)
            }}
            isInvalid={!formCampValidation.email}
            isValid={formCampValidation.email}
          />
          <Form.Control.Feedback type="invalid">
            Required!  Set a valid email format!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Valid!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Commentary</Form.Label>
          <Form.Control as="textarea" rows={3}
            type="text"
            placeholder="Let us know your opinion"
            onChange={e => {
              setCommentary(e.target.value)
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
        <ToastContainer />
      </Form>
      {/* CONTACT */}
      <div className='contactContainer'>
        <Card className='contactCard' style={{ width: '100%', textalign: "center" }}>
          <ListGroup variant="flush">
            <Card.Title>Other contacts:</Card.Title>
            <ListGroup.Item><FaLocationDot />Location:  Lorem Ipsum location</ListGroup.Item>
            <ListGroup.Item><CiMail /> Our email: Lorem Ipsum email</ListGroup.Item>
            <ListGroup.Item><FaWhatsapp /> Whatsapp: lorem ipsum whatsapp</ListGroup.Item>
            <ListGroup.Item> <h2>Find us in the map next</h2></ListGroup.Item>
          </ListGroup>
        </Card>

        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30823634.085088734!2d-117.0688062!3d19.427494900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fed3e30a2a1f%3A0xdbe11ff9eeb513d0!2sPasteler%C3%ADa%20Lorem!5e0!3m2!1ses-419!2sar!4v1700863884954!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Footer />
    </>
  );
};
export default NameForm;