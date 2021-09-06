import React from 'react'

const Member =({team})=>{

    return(
        <> 
           {
               team.map((element) =>{
                   return(
                    <div key={element.id} className=" col col-md-6">
                        <div className="card text-center p-3 mb-3">
                            <div className="card-image">
                                <img src={element.url} alt="memb" className="img" />
                            </div>
                            <div className="card-text">
                                <h4 className="py-3">{element.name}</h4>
                                <p>{element.position}</p>
                            </div>
                        </div>
                    </div>
                   )
               })   
           }
        </>
    )
}

export default Member;