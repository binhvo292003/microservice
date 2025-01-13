import React from 'react';

const userProfile = {
    image: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    orders: [
        { id: 1, item: 'Item 1', date: '2023-01-01' },
        { id: 2, item: 'Item 2', date: '2023-02-01' }
    ]
};

export default function ProfilePage() {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img
                    src={userProfile.image}
                    alt="Profile"
                    style={{ borderRadius: '50%', marginRight: '20px' }}
                />
                <h1>{userProfile.name}</h1>
            </div>
            <p>
                <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
                <strong>Phone:</strong> {userProfile.phone}
            </p>
            <p>
                <strong>Address:</strong> {userProfile.address}
            </p>
            <h2>Orders</h2>
            <ul>
                {userProfile.orders.map((order) => (
                    <li key={order.id}>
                        {order.item} - {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}
