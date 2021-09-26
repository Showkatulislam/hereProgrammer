import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart=props.cart
    let totalCost=0
    for(const programmer of cart){
        totalCost=totalCost+programmer.salary
        
    }
    console.log(totalCost)
    return (
        <div className="cart-text">
            <h3>Programmer : {cart.length}</h3>
            <small>You add 5 programmers only!!</small>
            <p><strong>Total cost</strong> :{totalCost} tk</p>
            <div>
            {
                cart.map(p=><p className="hire">{p.name}</p>)
            }
            </div>
        </div>
    );
};

export default Cart;