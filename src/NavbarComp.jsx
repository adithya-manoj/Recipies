import React, { useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function NavbarComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [catdata,setCatdata] = useState([]);

  useEffect(()=>{
    let fetchData= async()=>{
      let response= await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      // console.log(response);
      setCatdata(response.data.meals)
    }
    fetchData();
  })

  return (

    <Navbar bg="dark" data-bs-theme="dark">
      <Nav>
        <Button variant="bg-transparent" onClick={handleShow}><GiHamburgerMenu /></Button>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {catdata.map((item)=>(
              <div>
                <button className='w-100 rounded-2 m-1 p-1'>
                {item.strCategory}
                </button>
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      </Nav>
      <Container>
<Link to='/' className='text-decoration-none'>
        <Navbar.Brand>Yummy</Navbar.Brand>
</Link>

        <Nav className="ms-auto">

          <Nav.Link>
            <Form>

            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              />
              </Form>
              </Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )
}

export default NavbarComp