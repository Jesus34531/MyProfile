import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Hobbies: React.FC = () => {
  return (
    <div>
      <h1>Mis Hobbies</h1>
      {/* Sub-menú de hobbies */}
      <div className="sub-menu" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <Link to="deportes">Deportes</Link>
        <Link to="musica">Música</Link>
        <Link to="anime">Anime</Link>
      </div>
      
      {/* Aquí se renderizarán los componentes hijos (Deportes, Musica, Anime) */}
      <div className="hobby-content" style={{ padding: '20px', backgroundColor: 'var(--color-extra-2)', borderRadius: '8px' }}>
        <Outlet />
      </div>
    </div>
  );
};