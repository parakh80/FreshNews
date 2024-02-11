import React from 'react'

const Footer = (props) => {
    const { mode } = props;
    return (
        <div>


            <div className={` rounded-lg shadow  m-4 bg-${mode === 'light' ? 'white' : 'gray-900'}  border ${mode === 'light' ? 'border-gray-200' : 'border-gray-700'} `}>
                <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={`${process.env.PUBLIC_URL}/freshnews.png`} className="h-32 " alt="FreshNews Logo" />
                        </div>
                        <ul className={`flex flex-wrap items-center mb-2 text-sm font-medium  sm:mb-0  text-${mode === 'light' ? 'gray-500' : 'gray-400'}`}>
                            <li>
                            <a href="https://github.com/parakh80/FreshNews.git" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className={`my-2  sm:mx-auto  lg:my-8 border-${mode === 'light' ? 'gray-200' : 'gray-700'}`} />
                    <span className={`block text-sm  sm:text-center  text-${mode === 'light' ? 'gray-500' : 'gray-400'}`}>© 2024 FreshNews™. All Rights Reserved.</span>
                </div>
            </div>


        </div>
    )
}

export default Footer
