import React, { useEffect, useState } from 'react';
import Data from './data';
import Member from './Member'
import './TeamStyle.css'
import 'bootstrap/dist/css/bootstrap.css';


const Team = ()=>{

    const [team,setTeam] = useState([]);

    useEffect(()=>{
        setTeam(Data);
    },[])

    return(
        <div className="container">
            <div className="row">
                <Member team={team}/>
            </div>            
        </div>
    )

}

export default Team;
