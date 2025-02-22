import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../layout/App';
import DashboardPage from '../page/dashboard/DashboardPage';
import SignInPage from '../page/auth/SignInPage';
import CategoryPage from '../page/category/CategoryPage';
import ErrorPage from '../page/error/ErrorPage';
import InventoryPage from '../page/inventory/InventoryPage';
import OrderPage from '../page/order/OrderPage';
import ProductPage from '../page/product/ProductPage';
import UserPage from '../page/user/UserPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <DashboardPage /> },
            { path: 'signin', element: <SignInPage /> },
            { path: 'category', element: <CategoryPage /> },
            { path: 'dashboard', element: <DashboardPage /> },
            { path: 'error', element: <ErrorPage /> },
            { path: 'inventory', element: <InventoryPage /> },
            { path: 'order', element: <OrderPage /> },
            { path: 'product', element: <ProductPage /> },
            { path: 'user', element: <UserPage /> },
            { path: '*', element: <Navigate replace to="/" /> },
        ],
    },
]);
