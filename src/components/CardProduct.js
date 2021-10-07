import {Button, Card} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import React from 'react'

const CardProduct = ({product, handlePostItem, handleDeleteItem}) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top' src={product.foto} height='200'  />
            <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Subtitle>{product.precio}</Card.Subtitle>
                <Card.Text>{product.descripcion}</Card.Text>
                <div className='row mx-0'>
                    <div className='col-6 px-0'><Button variant='secondary' onClick={() => handlePostItem(product._id)}>Agregar</Button></div>
                    <div className='col-6 px-0'><Button variant='secondary' onClick= {() => handleDeleteItem(product._id)}>Eliminar</Button></div>
                </div>
                <Link to={`/Form`}>Actualizar</Link>
            </Card.Body>

        </Card>
    )
}

export default CardProduct
