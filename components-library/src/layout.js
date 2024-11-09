import React from 'react';
import Navbar from './components/Navbar/DefaultNavbar/DefaultNavbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
