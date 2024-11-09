import React from 'react';
import FormSignIn from '../../components/common/formSignIn';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="mx-auto w-full max-w-md space-y-6 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Sign up your account
                    </h1>
                    <p className="mt-2">
                        Already have account?
                        <Link
                            className="font-medium ml-2 text-primary hover:underline"
                            to="/auth/login"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
                <div className="flex justify-center">
                    <FormSignIn />
                </div>
            </div>
        </div>
    );
}
