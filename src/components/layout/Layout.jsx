import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
    return (
        <div className="app bg-light min-vh-100 d-flex flex-column">
            <Header/>
            <main className="flex-grow-1">{children || <Outlet/>}</main>
            <Footer/>
        </div>
    );
}

export default Layout;
