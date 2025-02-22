import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function App() {
return (
    <div className=" flex overflow-hidden h-screen ">
        <Sidebar />
        <div className="w-full h-full overflow-hidden">
            <Header />
            <div className="px-8 pt-8 pb-[150px] w-full h-[80%] overflow-auto bg-secondary_bg">
                <Outlet />
            </div>
            <Footer />
        </div>
    </div>
);
}
