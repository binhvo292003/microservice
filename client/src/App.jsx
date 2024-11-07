import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import AdminDashboard from './pages/admin/dashboard';
import AdminProducts from './pages/admin/products';
import AdminOrders from './pages/admin/orders';
import AdminFeatures from './pages/admin/features';
import NotFound from './pages/not-found';
import ShoppingHome from './pages/shop/home';
import ShoppingCheckout from './pages/shop/checkout';
import ShoppingProfile from './pages/shop/profile';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="/admin">
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path="features" element={<AdminFeatures />} />
                </Route>
                <Route path="/shop">
                    <Route path="home" element={<ShoppingHome />} />
                    <Route path="checkout" element={<ShoppingCheckout />} />
                    <Route path="account" element={<ShoppingProfile />} />
                </Route>
                <Route path="/" element={<ShoppingHome />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
