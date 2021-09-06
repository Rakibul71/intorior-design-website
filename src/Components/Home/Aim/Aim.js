import React from 'react'
import './AimStyle.css'
import {FaQuoteLeft} from 'react-icons/fa'

const Aim =()=>{
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="jumbotron text-center mt-5 mb-5 py-5">
                        <h3 className="m-4">Aim</h3>
                        <p className="aim-para">
                           <span><FaQuoteLeft/> </span>  
                             Our Aim is to Imagine the world of construction in which
                             people can live there life according to there dreams.
                             We are having a passionate people in our team they are here forhelping you. So please connect to us for the best future of our next generation. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aim;