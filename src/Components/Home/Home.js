import React from 'react';
import Slider from './Slider/Slider';
import Clients from './Clients/Clients'
import Team from './Team/Team' 
import Aim from './Aim/Aim';
import Footer from './Footer/Footer';

const Home=()=>{
    return(
        <>
            <Slider />
            <Team />
            <Clients />
            <Aim />
            <Footer />
        </>
    )
}

export default Home;