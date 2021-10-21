import React from 'react';
import '../../Components/Shared/NavigationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
    return (
      <div className="Header-Container ">
            <div className='navigation-bar'>
                <nav className='nav-item'>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Portfolio</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="">More</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
          
          </div>

      </div>
    );
};

export default NavigationBar;