import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    // Edita los estilos de esta etiqueta <nav> en tu CSS para darle flexbox (display: flex; justify-content: space-between;)
    <nav className="navbar" style={{ backgroundColor: 'var(--color-principal)', padding: '1rem' }}>
      
      {/* Espacio reservado para tu Logo */}
      <div className="logo-container">
        <h2>[Tu Logo Aquí]</h2>
      </div>

      {/* Enlaces de navegación */}
      <ul className="nav-links" style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Mi Perfil</Link></li>
        <li><Link to="/hobbies" style={{ color: 'white', textDecoration: 'none' }}>Hobbies</Link></li>
        <li><Link to="/universidad" style={{ color: 'white', textDecoration: 'none' }}>Universidad</Link></li>
      </ul>
    </nav>
  );
};