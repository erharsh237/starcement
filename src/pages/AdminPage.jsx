import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPortal from '../components/admin/AdminPortal';

export default function AdminPage({ onDataUpdated }) {
  const navigate = useNavigate();

  const handleExitAdmin = () => {
    navigate('/');
  };

  return (
    <AdminPortal
      onExitAdmin={handleExitAdmin}
      onDataUpdated={onDataUpdated}
    />
  );
}
