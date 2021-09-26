import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Selected.css'

const Selected = (props) => {
    const { name, img } = props.member;
    const { deleteToCartHandler } = props;
    return (
        <div className="selected-member">
            <div><img src={img} alt="" /></div>
            <p>{name}</p>
            <div style={{ color: "red", marginLeft: "2px" }} onClick={() => deleteToCartHandler(props.member)}>
                <FontAwesomeIcon icon={faTimesCircle} />
            </div>
        </div>
    );
};

export default Selected;