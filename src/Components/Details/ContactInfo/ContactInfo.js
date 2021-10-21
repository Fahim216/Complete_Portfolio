import React from 'react';
import '../ContactInfo/ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome,faPhone,faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
    return (
        <section className="Contact-background">
            <div className="row">
                <div className="col-md-12 ">
                  <div className="text-center">
                  <h1 className="Contact">CONTACT WITH ME</h1>
                    <h3>Fahim Ahmed</h3>
                    <p><FontAwesomeIcon icon={faHome}/>  Sylhet-3100</p>
                    <p><FontAwesomeIcon icon={faPhone}/> 01887884257</p>
                    <p><FontAwesomeIcon icon={faEnvelopeSquare} /> Fahimahmed4639@gmail.com</p>
                  </div>
                  <div className='social-links d-flex flex-columnm ms-3  text-center'>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.facebook.com/fahim.ahmed.5621149/" className="twitter p-2"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/in/fahim-ahmed-62b50a1b7/" className="twitter p-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" className="twitter p-2"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                </div>

            </div>
        </section>
    //     <div className="col-md-4 text-black">
    //     <div className="shadow-lg p-5 mb-5 rounded">
           
    //        <div className="EducationCard ">
           
    //        <h2 className=' mb-3 pt-4 text-yellow'>Fahim Ahmed</h2>
    //         <p><b></b></p>
    //         <p><b></b></p>
    //         <p><b></b></p>
    //         <p><b></b></p>
    //        </div>
            
    //     </div>
    // </div>


      
    );
};

export default ContactInfo;