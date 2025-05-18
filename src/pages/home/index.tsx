import React, { useEffect, useState } from 'react';
import { NextPageWithLayout } from '@/types/page';
import Layout from '@/components/layout/layout';
import Hero from './hero';
import About from './about';
import Services from './service';
import Stats from './stats';
import WhyUs from './why';
import Testimonials from './testimonials';
import Contact from './contact';
import ImageTextSplit from './imagesplit';

const Landing: NextPageWithLayout = () => {

    useEffect(() => {
        document.title = 'Modern Star Shipping LLC | Home';
    }, []);

    return (
        <>
            <Hero /> 
            <ImageTextSplit />
            <About />
            <Services />
            <WhyUs />
            <Stats /> 
            {/* <Testimonials /> */}
            <Contact />
        </>

    );
};

Landing.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Landing;