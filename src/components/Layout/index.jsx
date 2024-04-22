import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import './index.css'

const Layout = () => {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive); 
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand align-items-center">
                        <span className="poppins-bold">Hemmings</span>
                    </Link>
                    <button
                        aria-label="Toggle Navigation"
                        className={isActive ? 'navbar-toggler toggled' : 'navbar-toggler'}
                        onClick={ToggleClass}
                    >
                        <span></span>
                    </button>
                    <div className={isActive ? 'show nav-items' : 'nav-items'}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link onClick={ToggleClass} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={ToggleClass} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={ToggleClass} to="/experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={ToggleClass} to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={ToggleClass} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout