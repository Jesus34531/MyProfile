import React from 'react';

export const Perfil: React.FC = () => {
  return (
    // Usa flexbox o grid en tu CSS para hacer esta vista responsiva (apilada en móviles, lado a lado en PC)
    <div className="perfil-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', marginTop: '40px' }}>
      
      {/* Contenedor de la foto circular */}
      <div 
        className="foto-perfil" 
        style={{ 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--color-secundario)', 
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{ color: '#ccc' }}>[Foto Circular]</span>
        {/* Descomenta esto cuando tengas tu imagen */}
        {/* <img src="ruta-de-tu-foto.jpg" alt="Mi perfil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
      </div>

      {/* Información personal */}
      <div className="info-perfil" style={{ flex: '1', minWidth: '300px' }}>
        <h1>Hola, soy [Tu Nombre]</h1>
        <p>
          Aquí irá la información sobre ti. Hablaremos del contenido más adelante, 
          pero este es el bloque de texto que podrás expandir a tu gusto.
        </p>
      </div>
    </div>
  );
};