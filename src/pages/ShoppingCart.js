import { LOCALHOST, URL_API } from '../config/globals'
import React, { useEffect, useState } from 'react'

import CartProducts from '../components/CartProducts';

const ShoppingCart = () => {
    const [product, setProduct] = useState([])
    const [change, setChange] = useState(true)
    useEffect(() => {
        fetch(`${LOCALHOST}/carrito/listar`)
            .then(res => res.json()).then(resp => setProduct(resp))
            .catch(error => `We got this error: ${error}`)
    }, [change])

    const handleDeleteItem = async (id) => {
        await fetch(`${LOCALHOST}/carrito/borrar/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
            }
        })
        setChange(!change)

    }
    return (
        <>
            <div className='container-fluid mx-0'>
                {product.map(x => {
                    return (
                        <div className='row mx-0' key={x.producto.createdAt}>
                            <CartProducts product={x} handleDeleteItem={handleDeleteItem}/>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default ShoppingCart
