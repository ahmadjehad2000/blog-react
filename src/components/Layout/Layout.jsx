import React from 'react'
import StickyNavbar from '../Navbar/StickyNavbar';
import Footer from '../Footer/Footer';

function Layout({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <StickyNavbar />
            {/* main Content  */}
            <div className="content min-h-screen">
                {children}
            </div>
            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layout;