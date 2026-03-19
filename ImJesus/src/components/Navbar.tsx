import React from 'react';
import { Link } from 'react-router-dom';

// 💡 TIP: Cuando tengas tu logo, impórtalo aquí arriba igual que hicimos con tu foto
import miLogo from '../assets/Logo_programador.png'; 

export const Navbar: React.FC = () => {
  return (
    <nav 
      className="navbar" 
      style={{ 
        backgroundColor: 'var(--color-principal)', 
        padding: '1rem 2rem', // Añadimos padding a los lados para que el logo no pegue con el borde
        display: 'flex', 
        alignItems: 'center', // Alinea todo verticalmente al centro
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)' // Sombra sutil para darle volumen
      }}
    >
      
      {/* 1. ZONA IZQUIERDA (Logo) */}
      {/* Al darle flex: 1, esta zona empuja a la del medio para que se quede en el centro exacto */}
      <div className="logo-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        {/* Usé un tamaño de 60x60, 100x100 suele ser muy grande para una barra, ¡pero ajústalo a tu gusto! */}
        <img src={miLogo} alt="Mi Logo" width={150} height={150} style={{borderRadius:'20%',  backgroundColor: 'var(--color-terciario)' }} />
      </div>

      {/* 2. ZONA CENTRAL (Enlaces) */}
      <ul className="nav-links" style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          {/* 👇 ¡Magia! Le quitamos el style a los Links. Ahora obedecerán a tu global.css 👇 */}
          <Link to="/">Mi Perfil</Link>
        </li>
        <li>
          <Link to="/hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="/universidad">Universidad</Link>
        </li>
        <li>
          <Link to="/ia">Chat IA</Link>
        </li>
      </ul>

      {/* 3. ZONA DERECHA (Espaciador Invisible) */}
      {/* Este div vacío con flex: 1 equilibra el lado derecho para que los enlaces queden centrados perfectamente */}
      <div style={{ flex: 1 }}></div>

    </nav>
  );
};