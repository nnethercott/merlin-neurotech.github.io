import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import fullteam from '../assets/headshots/team.jpg';
import lukas from '../assets/headshots/lukas.jpg';
import julia from '../assets/headshots/julia.jpg';
import abby from '../assets/headshots/abby.jpg';


function Team() {
    return (
        <div>
            <Header title="Our Team"/>
            <SubHeader title="Our Team" />
            <div className="container">
                <div className="row">
                    <img src={fullteam} className="img-fluid" />
                    <div className="col-sm-4">
                    <br />
                        <p>
                            Abigail Holland <br />
                            President <br />
                            <img src={abby} className="img-fluid" />
                            </p>  
                    </div>
                    <div className="col-sm-4">
                        <br />
                        <p>
                            Julia Maine <br />
                            Director of Operations <br />
                            <img src={julia} className="img-fluid" />
                            </p>   
                    </div>
                    <div className="col-sm-4">
                    <br />
                        <p>
                            Lukas Bauer <br />
                            Director of Education <br />
                            <img src={lukas} className="img-fluid" />
                            </p>   
                    </div>

                </div>
            </div>
        </div> 
    )
}
export default Team;