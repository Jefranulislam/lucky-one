import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, image_link, category, price } = props.product;

    return (
        <div className='product'>
            <img src={image_link} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Category:{category}</small></p>
                <p>${price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'><p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></p></button>

        </div>
    );
};

export default Product;