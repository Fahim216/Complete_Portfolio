import React from 'react';
import '../Header/Header.css';
import Main from '../Main/Main';
import NavigationBar from '../Shared/NavigationBar';

const Header = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Main></Main>
        </div>
    );
};

export default Header;