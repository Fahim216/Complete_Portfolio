import React from 'react';

const AboutCardInfo = ({worker}) => {
    return (
        <div className="col-md-4 text-black service-info  ">
        <div className="mt-4 shadow-lg p-5 mb-5 bg-white rounded">
           
           <div>
           
           <h2 className='mt-2 mb-3'>{worker.name}</h2>
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