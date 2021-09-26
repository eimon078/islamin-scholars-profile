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
                <h3>Name: {name}</h3>
                <p><span>Intro: </span>{description.slice(0, 44)}</p>
                <p><span>Nationality:</span>{country}</p>
                <p><span>Education: </span>{education}</p>
                <p><span>Born: </span>{born}</p>
                <p><span>Payment: </span><strong>${payment}</strong></p>
            </div>
            <div>
                <button onClick={() => addToCartHandler(scholar)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Selected Cart</button>
            </div>
        </div>
    );
};

export default Scholar;