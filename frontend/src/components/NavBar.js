import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = (props) => {


  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const { mode, toggleMode, onSearchQueryChange  } = props; // Destructuring props
  const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if(searchQuery.trim() != ''){
    let query = encodeURIComponent(searchQuery.trim());
      onSearchQueryChange(query);
    scrollToTop();
    }
  };



  // Inside your NavBar component
  const handleNavbarLinkClick = () => {
    setSearchQuery(''); // Reset searchQuery
  };
  
  



  return (
    <>
      <nav className={`fixed w-full z-10 top-0 start-0 border-b ${mode === 'light' ? 'bg-white  border-gray-200' : 'bg-gray-900 border-gray-600'}`}>
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-1">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src={`${process.env.PUBLIC_URL}/freshnews.png`} 
              className="h-12 rounded-full" alt="FreshNews Logo" 
            />
            <span 
              className={`self-center text-2xl font-semibold whitespace-nowrap  ${mode === 'light' ? '' : 'text-white'}`}>
                FreshNews
            </span>
          </Link>
          <div className="flex md:order-2">
            <button 
              type="button" 
              data-collapse-toggle="navbar-search" 
              onClick={handleSearch}
              aria-controls="navbar-search" 
              aria-expanded="false" 
              className={`md:hidden  focus:outline-none focus:ring-4   rounded-lg text-sm p-2.5 me-1 ${mode === 'light' ? 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200' : 'text-gray-400 hover:bg-gray-700 focus:ring-gray-700'}`}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
              <span className="sr-only">Search</span>
            </button>
            <form onSubmit={handleSearch}>
            <div className="relative hidden md:block"> 
              <div className="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className={`w-4 h-4   ${mode === 'light' ? 'text-gray-500' : 'text-gray-400'}`}  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              {/* <input type="text" id="search-navbar"  className={`block w-full p-2 ps-10 text-sm  rounded-lg    ${mode === 'light' ? 'text-gray-900 border  border-gray-300   bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ' : 'bg-gray-700  border-gray-600 placeholder-gray-400  text-white focus:ring-blue-500 focus:border-blue-500'}`} placeholder="Search..." /> */}
            
              <input
              type="text"
              id="search-navbar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // onKeyDown={handleKeyPress}
              className={`block w-full py-2 ps-10 text-sm rounded-lg ${mode === 'light' ? 'text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500' : 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'}`}
              placeholder="Search news..." 
            />
           
            </div>
           </form>
            <label className="inline-flex items-center cursor-pointer ml-2">
              <input type="checkbox" value=""
                className="sr-only peer" onClick={toggleMode} />
              <div className={`relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600 ${mode === 'light' ? 'bg-gray-200 after:border-gray-300 peer-focus:ring-blue-300' : 'border-gray-600 bg-gray-700 peer-focus:ring-blue-800'}`}></div>
              <span className={`ms-2 text-sm font-medium ${mode === 'light' ? 'text-gray-900' : 'text-gray-300'}`}>{mode === 'light' ? 'Lights Off' : 'Lights On'}</span>
            </label>
            <button 
              data-collapse-toggle="navbar-search" 
              type="button" 
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2     ${mode === 'light' ? 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200' : 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600'}`} 
              aria-controls="navbar-search" aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className={`w-4 h-4  ${mode === 'light' ? 'text-gray-500' : 'text-gray-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input 
                type="text" 
                id="search-navbar" 
                className={`block w-full p-2 ps-10 text-sm  rounded-lg   ${mode === 'light' ? 'text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500' : 'bg-gray-700 border-gray-600  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'}`} 
                placeholder="Search news..." 
              />
            </div>
            <ul className={`flex flex-col p-2 md:p-0  mt-1 mb-1 font-medium border  rounded-lg  md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ${mode === 'light' ? 'border-gray-100 bg-gray-50 md:bg-white' : 'bg-gray-800 md:bg-gray-900 border-gray-700'}`}>
              <li>
                <Link 
                  to="/"            
                  onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                  className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`} 
                  aria-current="page">
                    Home
                  </Link>
              </li>
              <li>
                <Link 
                  to="/business"                   
                  onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                  className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`}>
                    Business
                </Link>
              </li>
              <li>
                <Link 
                  to="/health"                   
                  onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                  className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`}>
                    Health
                </Link>
              </li>
              <li>
                <Link 
                  to="/entertainment"                   
                  onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                  className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`}>
                    Entertainment
                </Link>
              </li>
              <li>
                <Link 
                  to="/sports"                  
                  onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                  className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`}>
                    Sports
                </Link>
              </li>
              <li>
                <Link 
                   to="/science"                    
                   onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                   className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`}>
                    Science
                </Link>
              </li>
              <li>
                <Link 
                  to="/technology"                    
                  onClick={() => { handleNavbarLinkClick(); scrollToTop(); }}
                  className={`block py-2 px-3  rounded   md:p-0  ${mode === 'light' ? 'text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:hover:bg-transparent' : 'text-white  hover:text-white md:hover:text-blue-500  hover:bg-gray-700 border-gray-700 md:hover:bg-transparent'}`}>
                    Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;