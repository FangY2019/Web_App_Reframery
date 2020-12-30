import React from 'react';
import AdminMenu from '../components/AdminSidebar'
import UserPage from '../pages/UserPage'

export default function AdminProfilePage() {

    return (
        <div className="admin-container">
            <AdminMenu />
            <UserPage />
            
        </div>
    );
}
