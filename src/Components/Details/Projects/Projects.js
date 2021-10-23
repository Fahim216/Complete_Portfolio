import React from 'react';
import '../Projects/Projects.css';
import { Card, CardGroup } from 'react-bootstrap';
import auction from '../../../Image/Auction.png';
import Ecommerce from '../../../Image/E-commerce site.png';
import League from '../../../Image/League.png';
const Projects = () => {
    return (
       <section id="Project" className='project-section row'>
          
          <div className='text-center mt-5'> <h1>Works</h1>
           <p>Latests project</p></div>
           <div className='project-card '>
           <CardGroup className='align-center me-2'>
  <Card className=' cart me-2 p-3 '>
    <Card.Img variant="top" className='img-fluid cartImg' src={Ecommerce} />
    <Card.Body>
      <Card.Title>E-Commerce Demo Site</Card.Title>
      <Card.Text>
        <p>This site is for practicing project. It includes html,css and Bootstrap.
            It is 100% responsive and Static with 1 pages.
        </p>
      </Card.Text>

    </Card.Body>
    <Card.Footer>
     <a class="btn btn-success"href="https://fahim216.github.io/panda-commercial-site/">Live Link</a>
    </Card.Footer>
  </Card>
  <Card className='  cart me-2 p-2 '>
    <Card.Img variant="top"  className='img-fluid cartImg' src={League} />
    <Card.Body>
      <Card.Title>Premier-League Explore</Card.Title>
      <Card.Text>
        <p>It is a European League site ..You Can Explore and get Knowledge about any team of this league.
            Creates with html,css,bootstrap,React-js. It is a dynamic and 2 page website.
        </p>
    
      </Card.Text>

    </Card.Body>
    <Card.Footer>
     <a class="btn btn-success"href="https://sports-mania-fahim15.netlify.app/">Live Link</a>
    </Card.Footer>
  </Card>
  <Card className=' cart '>
    <Card.Img variant="top"  className='img-fluid cartImg' src={auction} />
    <Card.Body>
      <Card.Title>Player Auction site </Card.Title>
      <Card.Text>
        <p>Auction site . You can buy any player and can know about the total amount of your expenses.
        Using Bootstrap,javascript...Dynamic site with 1 page.css are not used ..
        </p>
      </Card.Text>

    </Card.Body>
    <Card.Footer>
     <a class="btn btn-success"href="https://player-auction-price.netlify.app/">Live Link</a>
    </Card.Footer>
  </Card>
</CardGroup>
   </div>           
       </section>
    );
};

export default Projects;