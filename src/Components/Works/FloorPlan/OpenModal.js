import React from 'react'

const OpenModal =({value,showValue,HandleModal})=>{

    if(!showValue){
        return null;
    }

    return(
        <div className="container-mod">
            <div className="img-container-mod">
                <div className="close-icon" onClick={() =>{ HandleModal()}}>&times;</div>
                <img src={value} alt="flooer-plan" />
            </div>
        </div>
    )
}

export default OpenModal;