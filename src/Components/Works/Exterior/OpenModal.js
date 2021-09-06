import React from 'react'
import './ModalStyle.css';

const OpenModal = ({ value, showValue, HandleModal }) => {

    if (!showValue) {
        return null;
    }

    return (
        <div className="container-mod">
            <div className="img-container-mod">
                <div className="close-icon" onClick={() =>{ HandleModal()}}>&times;</div>
                <img src={value} alt="lake" />
            </div>
        </div>
    )
}

export default OpenModal;


            // <div className="img-modal-container">
        //     <div className="img-modal">
        //         <div className="close-icon" onClick={()=>{HandleModal()}}>&times;</div>
        //         <img src={value} className="img"></img>
        //     </div>
        // </div>