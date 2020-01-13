import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

function Team() {
    return (
        <div>
            <Header title="Our Team"/>
            <SubHeader title="Who Are We" />
            <div className="container">
                <div className="row">
                    <div className="col-sm">   
                        <p>picture..</p>
                        <p>name..</p>
                        <p>position..</p>
                    </div>
                    <div className="col-sm">
                        ...
                    </div>
                    <div className="col-sm">
                        ...
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Team;