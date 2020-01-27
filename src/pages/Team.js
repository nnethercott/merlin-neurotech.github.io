import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import fullteam from '../assets/headshots/team.jpg';
import lukas from '../assets/headshots/lukas.jpg';
import julia from '../assets/headshots/julia.jpg';
import abby from '../assets/headshots/abby.jpg';
import shawn from '../assets/headshots/shawn.jpg';
import sam from '../assets/headshots/sam.jpg';
import cam from '../assets/headshots/cam.jpg';
import mike from '../assets/headshots/mike.jpg';
import mo from '../assets/headshots/mo.jpg';
import theo from '../assets/headshots/theo.jpg';
import awni from '../assets/headshots/awnijpg';
import josh from '../assets/headshots/josh.jpg';
import derek from '../assets/headshots/derek.jpg';
import nate from '../assets/headshots/nate.jpg';
import umer from '../assets/headshots/umer.jpg';



function Team() {
    return (
        <div>
            <Header title="Our Team"/>
            <img src={fullteam} className="img-fluid" />
            <SubHeader title="Executive Team" />

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    <br />
                        <p>
                            <b> Abigail Holland </b> <br />
                            President <br />
                            <img src={abby} className="img-fluid" />
                            </p>  
                            <br />
                        <p>
                            <b> Shawn Carere </b> <br />
                            Artificial Intelligence Lead <br />
                            <img src={shawn} className="img-fluid" />
                            </p> 
                    </div>
                    <div className="col-sm-4">
                        <br />
                        <p>
                            <b> Julia Maine </b> <br />
                            Director of Operations <br />
                            <img src={julia} className="img-fluid" />
                            </p>  
                        <br /> 
                        <p>
                            <b> Sam White </b> <br />
                            Backend Development Lead <br />
                            <img src={sam} className="img-fluid" />
                            </p> 
                    </div>
                    <div className="col-sm-4">
                    <br />
                        <p>
                            <b> Lukas Bauer </b> <br />
                            Director of Education <br />
                            <img src={lukas} className="img-fluid" />
                            </p>   
                        <br /> 
                        <p>
                            <b> Cam McKay </b> <br />
                            Backend Development Lead <br />
                            <img src={cam} className="img-fluid" />
                            </p> 
                    </div>
                </div>

            </div>
            <SubHeader title="Software Development Team" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    <br />
                        <p>
                            <b> Nate Nethercott </b> <br />
                             <br />
                            <img src={nate} className="img-fluid" />
                            </p>  
                            <br />
                        <p>
                            <b> Mike Kurdyla </b> <br />
                             <br />
                            <img src={mike} className="img-fluid" />
                            </p> 
                    </div>
                    <div className="col-sm-4">
                        <br />
                        <p>
                            <b>  </b> <br />
                            Director of Operations <br />
                            <img src={julia} className="img-fluid" />
                            </p>  
                        <br /> 
                        <p>
                            <b> Sam White </b> <br />
                            Backend Development Lead <br />
                            <img src={sam} className="img-fluid" />
                            </p> 
                    </div>
                    <div className="col-sm-4">
                    <br />
                        <p>
                            <b> Lukas Bauer </b> <br />
                            Director of Education <br />
                            <img src={lukas} className="img-fluid" />
                            </p>   
                        <br /> 
                        <p>
                            <b> Cam McKay </b> <br />
                            Backend Development Lead <br />
                            <img src={cam} className="img-fluid" />
                            </p> 
                    </div>
                </div>

            </div>
        </div> 
    )
}
export default Team;