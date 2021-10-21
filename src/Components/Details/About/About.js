import React from 'react';
import AboutCardInfo from "./AboutCardInfo";
import '../About/About.css';

const worker=[
    {    
        name:'SYLHET GOVT. PILOT HIGH SCHOOL',
        degree:'Graduation Degree : SSC',
        year:'Passing-Year : 2016',
        GPA:'GPA-5.0(A+)'

    },
    {    
        name:'SYLHET GOVT. COLLEGE',
        degree:'Graduation Degree : HSC',
        year:'Passing-Year : 2018',
        GPA:'GPA-4.75(A)'

    },
    {  
        name:'SYLHET AGRICULTURAL UNIVERSITY',
        degree:"Graduation Degree :'Bsc. hons'",
        subject:'Subject: Agricultural Engineering & Technology',
        year:'Session : 2018-19(Continue*)',
       

    }
]

const About = () => {
    return (
        <section id="about" className='row mt-5 ms-3 me-3 text-center  '>
        <h1 className='mt-2 mb-5 top '>Education Background</h1>
      
             {
                 worker.map(worker =><AboutCardInfo worker={worker}></AboutCardInfo>)
             }
        
      
 
     </section>
    );
};

export default About;