import React from 'react';
import '../About/AboutCardInfo.css';

const AboutCardInfo = ({worker}) => {
    return (
        <div className="col-md-4  text-black ">
        <div className=" shadow-lg p-5 mb-5 rounded Card ms-4 me-4">
           
           <div className="Education-card  ">
           
           <h2 className=' mb-3 pt-4 text-yellow'>{worker.name}</h2>
            <p><b>{worker.degree}</b></p>
            <p><b>{worker.subject}</b></p>
            <p><b>{worker.year}</b></p>
            <p><b>{worker.GPA}</b></p>
           </div>
            
        </div>
    </div>
    );
};

export default AboutCardInfo;