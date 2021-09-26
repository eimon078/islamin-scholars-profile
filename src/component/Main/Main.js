import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Scholar from '../Scholar/Scholar';
import Selected from '../Selected/Selected';
import "./Main.css"

const Main = () => {

    const [scholars, setScholars] = useState([]);
    const [selectedScholar, setSelectedScholrs] = useState([]);

    // load data 
    useEffect(() => {
        fetch('./scholar_s.json')
            .then(res => res.json())
            .then(data => setScholars(data))
    }, [])

    // additem
    const addToCartHandler = (scholar) => {
        let isexist = selectedScholar.find((member) => member.id === scholar.id)
        if (!isexist) {
            let addNewMember = [...selectedScholar, scholar];
            setSelectedScholrs(addNewMember);
        }
        else {
            alert("Already Selected, Pleasr Choose another schorar");
        }
    }


    // Add item 
    const deleteToCartHandler = (deletItem) => {
        let remainingScholar = selectedScholar.filter(scholar => scholar.id !== deletItem.id)
        setSelectedScholrs(remainingScholar);
    }

    // calculate total 
    const totalCost = selectedScholar.reduce((total, currentItem) => total + currentItem.payment, 0);

    return (
        <div className="main">

            <div className="scholars-container">
                {
                    scholars.map(scholar => <Scholar
                        key={scholar.id}
                        addToCartHandler={addToCartHandler}
                        scholar={scholar}>

                    </Scholar>)
                }
            </div>

            <div className="cart">
                <h3><span><FontAwesomeIcon icon={faUsers} /></span> Selected Scholars: <span>{selectedScholar.length}</span></h3>
                <h3>Total Price: <span>${totalCost}</span></h3>

                {
                    selectedScholar.map(member => <Selected
                        key={member.id}
                        deleteToCartHandler={deleteToCartHandler}
                        member={member}>

                    </Selected>)
                }
            </div>
        </div>
    );
};

export default Main;