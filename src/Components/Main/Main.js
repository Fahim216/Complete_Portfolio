import React from 'react';
import '../Main/Main.css';
import image from '../../Image/my-bg.png';

const Main = () => {
    return (
        <div className="Main-Container">
           <section className="row">
               <div className="col-md-6 mt-5 ms-5 mb-5">
                   <h1 className="ms-4 mt-5 ps-3 text-white">Fahim Ahmed</h1>
                   <p className="ms-4  ps-3 text-success"> <h1>I am a<span className="change_content">_</span></h1></p>
               </div>
               <div className="col-md-4 mt-3 mb-5 ">
                   <img className="img-fluid Main-img" src={image} alt="" />
               </div>
           </section>
        </div>
    );
};

export default Main;