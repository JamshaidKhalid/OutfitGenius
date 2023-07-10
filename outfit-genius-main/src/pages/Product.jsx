import React from 'react'
import productData from '../data/ProductData'
import ProductList from '../components/Products/ProductList'
const Product = () => {
  return (
    <div>
      <ProductList products={productData}/>
    </div>
  )
}

export default Product
