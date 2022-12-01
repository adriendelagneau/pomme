import React, { Fragment } from 'react';
import Basket from './Basket';
import Footer from './Footer';
import Navbar from './Navbar';
//import dynamic from 'next/dynamic';

/*
const NAvbar = dynamic(() => import('./Navbar'), { ssr: false})
*/

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar />
                {children}
            <Basket />
            <Footer />
        </Fragment>
    );
};

export default Layout;