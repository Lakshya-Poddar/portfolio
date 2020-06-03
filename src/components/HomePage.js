import React from 'react';
import Body from './Body';
import NavHeader from './NavHeader';
import Footer from './Footer';
function HomePage() {
    return (
        <React.Fragment>
            <NavHeader></NavHeader>
                <Body></Body>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default HomePage
