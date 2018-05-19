import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ onEdit, product }) => (
  <tr>
  <td>{product.name}</td>
  <td>{product.sku}</td>
  <td>{product.quantity}</td>
  <td>{product.price}</td>
  <td onClick={onEdit}>Edit</td>
  </tr>
)

Product.propTypes = {
  onEdit: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

export default Product;