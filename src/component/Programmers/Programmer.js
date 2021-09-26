import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Programmer.css"
const Programmer = (props) => {
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const {name,nationity,age,language,salary,img}=props.programmer
    return (
        <div className='programmer'>
            <div className="img-container"><img className="images" src={img} alt=""/></div>
            <div className="programmer-details">
            <h5>name   : {name}</h5>
            <p>Nationality: {nationity}</p>
             <p><small>Age       :{age}</small></p>
            <p>Lanuage :{language}</p>
            <p>Salary       :{salary} tk</p>
            </div>
            <button onClick={()=>props.handleCart(props.programmer)}>{shoppingCartIcon} Buy Now</button>
        </div>
    );
};

export default Programmer;