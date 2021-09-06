import React from 'react'
import {Link} from 'react-router-dom'
 
const DropDown = ({value}) => {
    if(!value){
        return null
    }

    return (
        <ul className="toggle-menu shadow-lg">
            <li className="sub-item py-2"><Link to="/exterior" className="link">Exterior</Link></li>
            <li className="sub-item py-2"><Link to="/interior" className="link">Interior</Link></li>
            <li className="sub-item py-2"><Link to="/floorPlan" className="link">Floor Plan</Link></li>
            <li className="sub-item py-2"><Link to="/pop" className="link">Ceiling POP</Link></li>
            <li className="sub-item py-2"><Link to="/sitePlan" className="link">Site Plan</Link></li>
        </ul>
    )
}

export default DropDown;