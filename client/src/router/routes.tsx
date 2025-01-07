import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '@/pages/home/HomePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '*', element: <Navigate replace to="/" /> },
        ],
    },
]);
