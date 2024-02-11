import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const { mode, toggleMode } = props;

    return (
        <div className={`w-full bg-gray-300 p-3 flex items-center justify-between fixed top-0 z-10 ${mode === 'light' ? 'text-black' : 'text-white'}`}>
            <div className="flex items-center">
                <Link to="/" className="text-xl font-bold" onClick={scrollToTop}>FreshNews</Link>
                <Link to="/" className="ml-5" onClick={scrollToTop}>Home</Link>
                <Link to="/business" className="ml-3" onClick={scrollToTop}>Business</Link>
                <Link to="/entertainment" className="ml-3" onClick={scrollToTop}>Entertainment</Link>
                <Link to="/health" className="ml-3" onClick={scrollToTop}>Health</Link>
                <Link to="/science" className="ml-3" onClick={scrollToTop}>Science</Link>
                <Link to="/sports" className="ml-3" onClick={scrollToTop}>Sports</Link>
                <Link to="/technology" className="ml-3" onClick={scrollToTop}>Technology</Link>
            </div>

            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode} />
                <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Enable Darkmode</label>
            </div>
        </div>
    );
}

export default NavBar;