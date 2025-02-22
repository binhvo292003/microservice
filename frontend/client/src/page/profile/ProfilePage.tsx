import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/user/api/profile', {
            method: 'GET',
            credentials: 'include' // Send cookies with the request
        })
            .then((response) => {
                if (!response.ok) throw new Error('Unauthorized');
                return response.json();
            })
            .then((data) => {
                setProfile({
                    id: data.user.id,
                    fullName: data.user.displayName,
                    firstName: data.user.name?.givenName || '',
                    lastName: data.user.name?.familyName || '',
                    email: data.user.emails?.[0]?.value || '',
                    emailVerified: data.user.emails?.[0]?.verified || false,
                    profilePicture: data.user.photos?.[0]?.value || data.user._json?.picture || ''
                });
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;

    if (error) return <p className="text-center text-red-500">{error}</p>;

    return profile ? (
        <div className="flex items-center justify-center py-20 ">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center">
                <img
                    src={profile.profilePicture}
                    alt={`${profile.fullName}'s profile`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h1 className="text-xl font-bold text-gray-800 mb-2">{profile.fullName}</h1>
                <p className="text-sm text-gray-600 mb-2">
                    <strong>Email:</strong> {profile.email}
                </p>
                {profile.emailVerified ? (
                    <p className="text-sm text-green-500">Email Verified</p>
                ) : (
                    <p className="text-sm text-red-500">Email Not Verified</p>
                )}
                <div className="mt-4">
                    <p className="text-sm text-gray-600">
                        <strong>First Name:</strong> {profile.firstName}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Last Name:</strong> {profile.lastName}
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <p className="text-center text-gray-500">Profile not available.</p>
    );
};

export default ProfilePage;
