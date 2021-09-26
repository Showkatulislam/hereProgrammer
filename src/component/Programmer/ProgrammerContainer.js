import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmers/Programmer';
import "./Programmercontainer.css"
const ProgrammerContainer = () => {
    const [programmers,setProgrammers]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setProgrammers(data))
    },[])
    const handleCart=(programmer)=>{
        const t=cart.filter(p=>p.name===programmer.name)
        if(t.length===0 && cart.length<=4){
            const newCart=[...cart,programmer]
            setCart(newCart)
        }

         
    }
    return (
        <div className="container">
            <div className="programmers">
                {
                    programmers.map(programmer=><Programmer
                         key={programmer.id}
                          programmer={programmer}
                          handleCart={handleCart}
                          ></Programmer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default ProgrammerContainer;
//