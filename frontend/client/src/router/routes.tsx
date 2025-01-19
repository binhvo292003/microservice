import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '@/page/home/HomePage';
import ProductPage from '@/page/product/ProductPage';
import SignInPage from '@/page/auth/SignInPage';
import SignUpPage from '@/page/auth/SignUpPage';
import ProfilePage from '@/page/profile/ProfilePage';
import CartPage from '@/page/cart/CartPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'signin', element: <SignInPage /> },
            { path: 'signup', element: <SignUpPage /> },
            { path: 'product', element: <ProductPage /> },
            { path: 'profile', element: <ProfilePage /> },
            { path: 'cart', element: <CartPage /> },
            { path: '*', element: <Navigate replace to="/" /> }
        ]
    }
]);
