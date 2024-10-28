import logo from 'assets/logo.png';
import Button from '../../button/button';

const DefaultNavbar = () => {
    return (
        <>
            <div className="navbar bg-white-500">
                <div className="navbar-brand">
                    <div className='rounded-icon bg-blue-500'>
                        <img src={logo} alt="Fold UI Logo" />
                    </div>
                    <h2>Fold UI</h2>
                </div>
                <nav className="navbar-links">
                    <a href='' className="link-grey-900">Home</a>
                    <a href='' className="link-grey-900">About</a>
                    <a href='' className="link-grey-900">Contacts</a>
                    <Button text="Action" mode="solid" size="medium" theme="blue-500"/>

                </nav>
            </div>

            <nav className="mobile-links bg-blue-500">
                <a href='' className="link-grey-100">Home</a>
                <a href='' className="link-grey-100">About</a>
                <a href='' className="link-grey-100">Contacts</a>
            </nav>
        </>
    )
}

export default DefaultNavbar;