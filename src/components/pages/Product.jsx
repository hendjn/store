import React from 'react'
import { useEffect } from 'react'
import { getProduct } from '../../app/store'

function Product(props) {
    useEffect(()=>{
        console.log("id", props.match.params.id)
       // getProduct()
    })
    return (
        <div>
            <h1>
                Product
            </h1>
        </div>
    )
}

export default Product
