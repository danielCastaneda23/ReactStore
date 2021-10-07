import { Button, Card } from 'react-bootstrap'

import React from 'react'

const CartProducts = ({ product, handleDeleteItem}) => {
    return (
        <>
            <div className='col-3 px-0'>
                <img src={product.producto.foto} alt=':)' width='50px' height='auto' />
            </div>
            <div className='col-3 px-0'>
                {product.producto.nombre}
            </div>
            <div className='col-3 px-0'>
                {product.producto.stock}
            </div>
            <div className='col-2 px-0'>
                {product.producto.precio}
            </div>
            <div className='col-1 px-0'>
                <Button variant='secondary' size='sm' className='mb-1' onClick={() => handleDeleteItem(product._id)}>Eliminar</Button>
            </div>
        </>

    )
}

export default CartProducts
