import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function App() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
