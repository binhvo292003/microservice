import { Button } from '../components/ui/button';
import Header from './Header';

export default function App() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <Header />
            <main className="p-4">
                <h1 className="text-primary">Welcome to the App</h1>
                <Button>Click Me</Button>
            </main>
        </div>
    );
}
