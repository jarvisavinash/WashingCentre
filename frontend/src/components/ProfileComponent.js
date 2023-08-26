import React from 'react';
import { useAuth } from './AuthContext';

const ProfileComponent = () => {
  const { userId } = useAuth();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default ProfileComponent;
