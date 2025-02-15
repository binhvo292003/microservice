import { useState } from 'react';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleSignIn = () => {
        // Add your Google sign-in logic here
        window.location.href = 'http://localhost:8000/user/api/auth/google'; // Redirect to the API Gateway route
    };

    const handleFacebookSignIn = () => {
        // Add your Facebook sign-in logic here
        console.log('Sign in with Facebook');
    };

    return (
        <div className="flex items-center justify-center my-36">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
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
                            placeholder="Input Your Password"
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
                    <button
                        onClick={handleFacebookSignIn}
                        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
                        Sign in with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}
