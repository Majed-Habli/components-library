import logo from 'assets/logo.png';
import Button from '../../button/button';
import { useState } from 'react';

const DefaultNavbar = () => {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <header>
            <div className="navbar bg-white-500">
                <div className="navbar-brand">
                    <div className='rounded-icon bg-blue-500'>
                        <img src={logo} alt="Fold UI Logo" />
                    </div>
                    <h2>Fold UI</h2>
                </div>
                <nav className="navbar-links">
                    <a href='/' className="link-grey-900" aria-current={currentPage === 'home' ? "page" : undefined}
                        onClick={() => setCurrentPage('home')}>Home</a>
                    <a href='' className="link-grey-900" aria-current={currentPage === 'about' ? "page" : undefined}
                        onClick={() => setCurrentPage('about')}>About</a>
                    <a href='' className="link-grey-900" aria-current={currentPage === 'contacts' ? "page" : undefined}
                        onClick={() => setCurrentPage('contacts')}>Contacts</a>
                    <Button text="Action" mode="solid" size="medium" theme="blue-500"/>

                </nav>
            </div>

            <nav className="mobile-links bg-blue-500">
                <a href='' className="link-grey-100"  aria-current={currentPage === 'home' ? "page" : undefined}
                    onClick={() => setCurrentPage('home')}>Home</a>
                <a href='' className="link-grey-100"  aria-current={currentPage === 'contacts' ? "page" : undefined}
                    onClick={() => setCurrentPage('contacts')}>About</a>
                <a href='' className="link-grey-100"  aria-current={currentPage === 'contacts' ? "page" : undefined}
                    onClick={() => setCurrentPage('contacts')}>Contacts</a>
            </nav>
        </header>
    )
}

export default DefaultNavbar;