import React from 'react'

type paramsType = {
    productId : string
}

const ProductDetails = ({params}: {params : paramsType}) => {
    console.log(params);
  return (
    <div>
        <h1>ProductDetails {params.productId}</h1>
    </div>
  )
}

export default ProductDetails