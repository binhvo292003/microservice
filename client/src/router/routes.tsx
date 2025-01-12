import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '@/page/home/HomePage';
import ProductPage from '@/page/product/ProductPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'product', element: <ProductPage /> },
            { path: '*', element: <Navigate replace to="/" /> },
        ],
    },
]);
