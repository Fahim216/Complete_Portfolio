import React from 'react';
import '../../Components/Shared/NavigationBar.css'
import { Navbar,Container,Nav } from 'react-bootstrap';
import portfolio from '../../Image/portfolio logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
    return (
        <section className='Nav-section'>
       <Navbar bg="" expand="lg">
  <Container className="align-items-center">
    <Navbar.Brand href="#home" className="d-flex"><img src={portfolio}  width="40"
        height="40"
        className=" align-top align-items-center " alt="" /><h1 className="portfolio-text fst-italic pb-2  fs-3 mt-1 text-black">FAHIMPORTFOLIO</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto mb-3 fs-5 mt-2 ">
        <Nav.Link className="ms-2 fst-italic text-black NavLink " href="#Education">Education Info</Nav.Link>
        <Nav.Link className="ms-2 fst-italic text-black NavLink" href="#Skills">About_Skills</Nav.Link>
        <Nav.Link className="ms-2 fst-italic text-black NavLink" href="#Project">Latest project</Nav.Link>
        <Nav.Link className="ms-2 fst-italic text-black NavLink" href="#Contact">Contact</Nav.Link>
        <Nav.Link className="ms-2 fst-italic text-black NavLink" href="#link">Social_Links</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar></section>
    );
};

export default NavigationBar;