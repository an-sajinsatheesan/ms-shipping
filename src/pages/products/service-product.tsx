import Image from 'next/image';
import React, { useEffect, useState } from 'react';
 import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IndustryList from './../../shared/json/data.json';
import AOS from 'aos';
import 'aos/dist/aos.css';



const ProductsServices: React.FC = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Default duration (can be customized)
            easing: 'ease-in-out', // Easing function for smoother effect
        });
    }, []);


    return (
        <>

            <div className="max-w-6xl mx-auto wewew ">

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                <Tab label="Government" value="1" />
                                <Tab label="Banking" value="2" />
                                <Tab label="Construction" value="3" />
                                <Tab label="Retail" value="4" />
                            </TabList>
                        </Box>
                        {/* <TabPanel value="1">
                            <h1 className='max-w-4xl mx-auto w-100 text-sm leading-8 text-center py-4 px-3 text-slate-900 md:pb-4' data-aos="fade-left">Revolutionizing Government Operations by Harnessing Cutting-Edge, Secure, and Future-Ready Technology Solutions for Enhanced Efficiency, Transparency, and Seamless Citizen Engagement, Leading the Way in Transforming Public Services.</h1>
                            <Industries IndustryList={IndustryList.industries} isShowHeading={false} />
                        </TabPanel>
                        <TabPanel value="2">
                            <h1 className='max-w-4xl mx-auto w-100 text-sm leading-8 text-center py-4 px-3 text-slate-900 md:pb-4' data-aos="fade-left">Empowering Banking Excellence with Our Commitment to Delivering Innovative, Secure, and Customer-Centric Financial Solutions That Foster Trust, Growth, and Prosperity in Todays Dynamic Financial Landscape.</h1>
                            <Industries IndustryList={IndustryList.bankingIndustries} isShowHeading={false} /></TabPanel>
                        <TabPanel value="3">
                            <h1 className='max-w-4xl mx-auto w-100 text-sm leading-8 text-center py-4 px-3 text-slate-900 md:pb-4' data-aos="fade-left">Pioneering the Future of Construction by Delivering Innovative Solutions for Enhanced Efficiency, Safety, and Sustainability in Building Projects, Leading the Industry Toward Excellence and Shaping the Landscape of Tomorrows Construction.</h1>
                            <Industries IndustryList={IndustryList.constructionIndustries} isShowHeading={false} /></TabPanel>
                        <TabPanel value="4">
                            <h1 className='max-w-4xl mx-auto w-100 text-sm leading-8 text-center py-4 px-3 text-slate-900 md:pb-4' data-aos="fade-left">Elevating Retail Success by Unleashing Innovative Solutions for Enhanced Customer Experience, Operational Excellence, Data-Driven Insights, and Seamless Omnichannel Integration, Redefining Retailing in the Digital Age.</h1>
                            <Industries IndustryList={IndustryList.retailIndustries} isShowHeading={false} /></TabPanel> */}
                    </TabContext>
                </Box>

            </div>

        </>

    );
};

export default ProductsServices;