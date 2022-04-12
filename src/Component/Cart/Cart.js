import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {

    return (
        <div className='cart'  >
            <h3>Selected Items</h3>
            <div className='cart-images'> {
                cart.map(product =>
                    <div> <img src={product.image_link}></img>
                        <p> {product.name}</p>
                        <p> {product.price}</p> </div>
                )
            }
            </div>


            <button onClick={() => this.product.sort(() => Math.random() - Math.random())
                .find(() => true)}  > Randomly Peak One </button>

            <button  >Delete Alls</button>
        </div >
    );
};

export default Cart;