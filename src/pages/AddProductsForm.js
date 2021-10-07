import { LOCALHOST, URL_API } from '../config/globals'

import AddForm from '../components/AddForm'
import React from 'react'

const AddProductsForm = () => {
    const PostProductsHanlder = async (information) => {
        await fetch(`${LOCALHOST}/productos/agregar`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                information
            })
        })
    }
    return (
        <div className='container-fluid mx-0'>
            <div className='row mx-0 mt-3 justify-content-center'>
                <AddForm AddProductsHandler={PostProductsHanlder}/>
            </div>
        </div>
    )
}

export default AddProductsForm
