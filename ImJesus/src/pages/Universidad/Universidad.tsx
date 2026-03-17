import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Universidad: React.FC = () => {
  return (
    <div>
      <h1>Universidad</h1>
      <div className="sub-menu" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <Link to="trabajos">Trabajos</Link>
        <Link to="proyectos">Proyectos</Link>
        <Link to="agenda">Agenda</Link>
      </div>
      
      <div className="uni-content" style={{ padding: '20px', backgroundColor: 'var(--color-extra-2)', borderRadius: '8px' }}>
        <Outlet />
      </div>
    </div>
  );
};