import React from 'react'
import Head from 'next/head'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Sustained - 2024</title>
            </Head>

            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <main className='flex-grow'>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout