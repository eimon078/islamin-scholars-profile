import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Scholar.css'

const Scholar = (props) => {
    const { img, name, description, country, education, born, payment } = props.scholar;
    const { addToCartHandler, scholar } = props;
    return (
        <div className="scholar-container">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="scholar-details">
                <h3>{name}</h3>
                <p>{description.slice(0, 44)}</p>
                <p>{country}</p>
                <p>{education}</p>
                <p>{born}</p>
                <p><strong>${payment}</strong></p>
            </div>
            <div>
                <button onClick={() => addToCartHandler(scholar)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Selected Cart</button>
            </div>
        </div>
    );
};

export default Scholar;