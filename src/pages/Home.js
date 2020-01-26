import React from 'react';
import MainHeader from '../components/MainHeader';
import HomeHeader from '../components/HomeHeader';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { Canvas, useFrame } from 'react-three-fiber'

function Home() {
    return (
        <div style={{overflow: 'scroll'}}>
            <HomeHeader />
          
            <Footer />
        </div>
    )
}
export default Home;
