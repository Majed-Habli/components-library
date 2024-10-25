import logo from 'assets/logo.png';
const DefaultNavbar = () => {
    return (
        <>
            <div className="navbar bg-white-500">
                <div className="navbar-brand">
                    <div className='rounded-icon'>
                        <img src={logo} alt="Fold UI Logo" />
                    </div>
                    <h4>Fold UI</h4>
                </div>
                <nav className="navbar-links">
                    <a className="link-grey-600">Home</a>
                    <a className="link-grey-600">About</a>
                    <a className="link-grey-600">Contacts</a>
                    <button className="bg-blue-200">Action</button>
                </nav>
            </div>

            <nav className="mobile-links">
                <a className="link-grey-600">Home</a>
                <a className="link-grey-600">About</a>
                <a className="link-grey-600">Contacts</a>
            </nav>
        </>
    )
}

export default DefaultNavbar;