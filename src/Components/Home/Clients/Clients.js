import React, { useState, useEffect } from 'react'
import data from './data'
import './ClientStyle.css'
import 'bootstrap/dist/css/bootstrap.css'

const Clients = () => {
    const [client, setClient] = useState([]);
    useEffect(() => {
        setClient(data);
    }, [])

    console.log(client);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-8">
                        {
                            client.map((element) => {
                                return (
                                    <div className="row" key={element.id}>
                                        <div className="col-12 text-center col-md-6 mt-5">
                                            <img src={element.url} alt="client1" className="image" />
                                        </div>
                                        <div className="col-12 col-md-6 text-center mt-5 content">
                                            <h3>{element.name}</h3>
                                            <p>{element.text}</p>
                                            <p>- {element.address}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default Clients;