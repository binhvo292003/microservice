import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSignIn from '../../components/common/formSignIn';

const initialState = {
    email: '',
    password: '',
};

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="mx-auto w-full max-w-md space-y-6 bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Sign in to your account
                    </h1>
                    <p className="mt-2">
                        Don't have an account?
                        <Link
                            className="font-medium ml-2 text-primary hover:underline"
                            to="/auth/signup"
                        >
                            Register
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
