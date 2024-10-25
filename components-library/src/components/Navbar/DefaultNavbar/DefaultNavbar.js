import logo from 'assets/logo.png';
const DefaultNavbar = () => {
    return (
        <>
            <div className="navbar bg-white-500">
                <div className="navbar-brand">
                    <div className='rounded-icon bg-blue-200'>
                        <img src={logo} alt="Fold UI Logo" />
                    </div>
                    <h4>Fold UI</h4>
                </div>
                <nav className="navbar-links">
                    <a href='' className="link-grey-900">Home</a>
                    <a href='' className="link-grey-900">About</a>
                    <a href='' className="link-grey-900">Contacts</a>
                    <button className="bg-blue-200 hover-blue-400 text-white">Action</button>
                </nav>
            </div>

            <nav className="mobile-links bg-blue-300">
                <a href='' className="link-grey-100">Home</a>
                <a href='' className="link-grey-100">About</a>
                <a href='' className="link-grey-100">Contacts</a>
            </nav>
        </>
    )
}

export default DefaultNavbar;