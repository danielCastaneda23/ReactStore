import { Nav, Navbar } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import React from 'react'

const NavbarProducts = () => {
    return (
        <Navbar bg="secondary" expand="lg" className='mx-0 mb-1'>
            <Navbar.Brand className='mx-2 text-white'>Shopping Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to={`/Products`} style={{color: 'black', textDecoration:'none'}} className='mx-2'>Products</Link>
                    <Link to={`/Cart`} style={{color: 'black', textDecoration:'none'}} className='mx-2'>My Cart</Link>
                    <Link to={`/Form`} style={{color: 'black', textDecoration:'none'}} className='mx-2'>AddNewproducts</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarProducts
