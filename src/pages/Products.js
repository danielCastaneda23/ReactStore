import { LOCALHOST, URL_API } from '../config/globals'
import React, { useEffect, useState } from 'react'

import CardProduct from '../components/CardProduct'

const Products = () => {
    const [products, setProduct] = useState([])
    const [change, setChange] = useState(true)


    useEffect(() => {
        fetch(`${LOCALHOST}/productos/listar`)
            .then(res => res.json()).then(resp => setProduct(resp))
            .catch(error => `We got this error: ${error}`)
    }, )

    const postItem = async (id) => {
        await fetch(`${LOCALHOST}/carrito/agregar/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            }
        })
    }

    const handleDeleteItem = async (id) => {
        await fetch(`${LOCALHOST}/productos/borrar/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
            }
        })
        setChange(!change)
    }
    return (
        <div className='container-fluid px-0 mx-3 my-3 '>
            <div className='row mx-0'>
                    {products.map((eachProduct) => {
                        return (
                            <div className='col-4 px-0 my-2' key={eachProduct._id} >
                               
                                <CardProduct product={eachProduct} handlePostItem={postItem} handleDeleteItem={handleDeleteItem}/>
                            </div>
                        )
                    }
                    )}
            </div>
        </div>
    )
}

export default Products
