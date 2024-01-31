import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductList() {
  return (
    <div><Card>
    <Link to='/product-details'>
    Product 1
    </Link>
    </Card></div>
  )
}

export default ProductList