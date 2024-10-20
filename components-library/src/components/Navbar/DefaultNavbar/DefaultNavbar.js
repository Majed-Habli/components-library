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
                    <a className="link-black-100">Home</a>
                    <a className="link-black-100">About</a>
                    <a className="link-black-100">Contacts</a>
                    <button className="bg-black-300">Action</button>
                </nav>
            </div>

            <nav className="mobile-links">
                <a className="link-black-100">Home</a>
                <a className="link-black-100">About</a>
                <a className="link-black-100">Contacts</a>
            </nav>
        </>
    )
}

export default DefaultNavbar;