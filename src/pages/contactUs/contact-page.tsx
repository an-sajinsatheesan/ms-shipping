import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';



const ConatctDetails: React.FC = () => {


    return (
        <>

            <div className="max-w-6xl mx-auto mt-8 md:mt-20 md:p-0 p-3 animate-in duration-700 slide-in-from-bottom-48">
                <div className="flex w-100 gap-10 md:gap-20 items-start flex-col md:flex-row">
                    <div className="md:w-2/4 w-full">
                        <h5 className='text-4xl md:text-6xl font-semibold tracking-widest text-[#c1b7b7] mb-3'>CONTACT US</h5>
                        {/* <Image src="/static/assets/Accinge-Logo.png" alt="Arrow" width={225} height={125} className='' /> */}
                        <h1 className='text-sm leading-7 md:py-4 py-5'>Accinge provides software solutions as well as bespoke software development
                            services for corporate establishments and government sectors in UAE and EMEA region.</h1>
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4 ">
                                <a href="mailto:info@accinge.com" target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                        <div className="text-sm font-sm text-gray-600 leading-7 mx-3">info@accinge.com</div>
                                    </div>
                                </a>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                                    <div className="text-sm font-sm text-gray-600 leading-7 mx-3">sales@accinge.com</div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4 ">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    <div className="text-sm font-sm text-gray-600 leading-9 mx-3">04 454 8909</div>
                                </div>
                            </div>
                            <h2 className="text-sm font-sm text-gray-600 leading-9">217, Hamsah-A, Karama,<br></br> PO Box: 183570, Dubai, United Arab Emirates</h2>
                        </div>

                    </div>
                    <div className="md:w-2/4 w-full h-full border-1 border-gray-300 rounded-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 p-4 md:p-0">
                            <div className=' col-span-2 mb-3.5'>
                                <label htmlFor="" className='text-black text-sm'>First Name :</label>
                                <input type="text" className='border-1 border-gray-300 w-100 rounded-md focus:outline-none p-2 text-sm' />
                            </div>
                            <div className='col-span-2 mb-3.5'>
                                <label htmlFor="" className='text-black text-sm'>Last Name :</label>
                                <input type="text" className='border-1 border-gray-300 w-100 rounded-md focus:outline-none  p-2 text-sm' />
                            </div>
                            <div className='col-span-2 mb-3.5'>
                                <label htmlFor="" className='text-black text-sm'>Email :</label>
                                <input type="text" className='border-1 border-gray-300 w-100 rounded-md focus:outline-none  p-2 text-sm' />
                            </div>
                            <div className='col-span-2 mb-3.5'>
                                <label htmlFor="" className='text-black text-sm'>Phone :</label>
                                <input type="text" className='border-1 border-gray-300 w-100 rounded-md focus:outline-none  p-2 text-sm' />
                            </div>
                            <button className='text-white border-btn text-lg w-full text-center col-span-3 mb-3.5'>Submit</button>

                        </div>
                    </div>

                </div>
                <div className="p-6"></div>
                <div className="w-full py-4">
                    <iframe width="100%" height="300" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2002,%20Prism%20Tower,%20Business%20Bay,%20PO%20Box:%20183570,%20Dubai,%20AE+(Accinge%20Technologies)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/population/">Population calculator map</a>
                    </iframe>
                </div>
                <div className="p-8"></div>
            </div>

        </>

    );
};

export default ConatctDetails;