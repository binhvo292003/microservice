import { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl">My Landing Page</h1>
                </div>
            </header>
            <main className="flex-grow container mx-auto p-4">
                <section className="text-center my-8">
                    <h2 className="text-4xl font-bold mb-4">
                        Welcome to My Landing Page
                    </h2>
                    <p className="text-lg mb-4">
                        This is a simple landing page created with React and
                        Tailwind CSS.
                    </p>
                    <Button onClick={() => setCount(count + 1)}>
                        Click me! Count is {count}
                    </Button>
                </section>
            </main>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 My Landing Page. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
