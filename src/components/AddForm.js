import { Button, Form } from 'react-bootstrap'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const AddForm = ({AddProductsHandler}) => {
    const [information, setInformation] = useState({
        nombre: '',
        precio: 0,
        foto:'',
        descripcion: '',
    })
    return (
        
        <Form style={{width:'800px'}}>
            <Form.Group>
                <Form.Label>Ingrese Nombre De Producto</Form.Label>
                <Form.Control type='text' placeholder='Nombre Producto' value={information.nombre} onChange={(e) => setInformation({...information, nombre: e.target.value}) }/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingrese Precio De Producto</Form.Label>
                <Form.Control type='number' placeholder='Precio Producto' value={information.precio} onChange={(e) => setInformation({...information, precio: e.target.value}) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingrese CDN foto Del Producto </Form.Label>
                <Form.Control type='text' placeholder='CDN Producto' value={information.foto} onChange={(e) => setInformation({...information, foto: e.target.value}) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingrese Descripcion Del Producto </Form.Label>
                <Form.Control type='text' placeholder='Descripcion Producto' value={information.descripcion} onChange={(e) => setInformation({...information, descripcion: e.target.value}) } />
            </Form.Group>
            <Link to={`/Products`}><Button variant='secondary' className='mt-3' onClick={() => AddProductsHandler(information)}>Añadir Producto</Button></Link> 
        </Form>
    )
}
export default AddForm;
