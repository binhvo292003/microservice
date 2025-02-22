import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:8000/user/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Store tokens
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);

            // Redirect to homepage or dashboard
            navigate('/dashboard');
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = () => {
        window.location.href = 'http://localhost:8000/user/api/auth/google'; // Redirect to Google OAuth
    };

    return (
        <div className="flex items-center justify-center my-36">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-blue-500 hover:underline">
                        Forgot Password
                    </a>
                </div>
                <div className="mt-2 text-center">
                    <a href="#" className="text-blue-500 hover:underline">
                        Register new account
                    </a>
                </div>
                <div className="flex flex-row gap-2 mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
