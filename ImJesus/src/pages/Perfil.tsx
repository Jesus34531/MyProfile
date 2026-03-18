import React from 'react';

// --- PASO 1: IMPORTAR LA IMAGEN CORRECTAMENTE ---
// Importamos la imagen como un módulo. Asegúrate de que la ruta y el nombre
// del archivo coincidan exactamente.
import miFotoPerfil from '../assets/Personal/Perfil1.png';

export const Perfil: React.FC = () => {
  return (
    // Usa flexbox o grid en tu CSS para hacer esta vista responsiva
    <div className="perfil-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginTop: '40px' }}>
      
      {/* Contenedor de la foto circular */}
      <div 
        className="foto-perfil-wrapper" 
        style={{ 
          // --- PASO 2: HACER EL CÍRCULO MÁS GRANDE ---
          // Cambia estos valores para ajustar el tamaño del círculo. 
          // ¡Recuerda que deben ser iguales para que sea un círculo perfecto!
          width: '400px',  // Antes era 200px
          height: '400px', // Antes era 200px
          
          borderRadius: '50%', // Hace el contenedor circular
          overflow: 'hidden', // Recorta todo lo que se salga del círculo
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
          // Estilo opcional: añade un borde sutil
          border: '4px solid var(--color-principal)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}
      >
        {/* --- PASO 3: MEJORAR LA LÍNEA DE LA IMAGEN --- */}
        <img 
          // Usamos la variable de la importación
          src={miFotoPerfil} 
          alt="Mi foto de perfil" 
          style={{ 
            width: '100%', // La imagen ocupa todo el ancho del círculo
            height: '100%', // La imagen ocupa todo el alto del círculo
            
            // Cubre todo el círculo sin deformar la imagen
            objectFit: 'cover', 
            
            // --- CÓMO ACOMODAR LA IMAGEN ---
            // Asegura que la imagen se centre. Puedes probar valores como:
            // 'top center' (muestra la parte de arriba)
            // 'bottom center' (muestra la parte de abajo)
            objectPosition: 'center center', // Centra la imagen por defecto
          }} 
        />
      </div>

      {/* Información personal */}
      <div className="info-perfil" style={{ flex: '1', minWidth: '300px' }}>
        <h1 style={{ color: 'var(--color-extra-1)' }}>Hola, mi nombre es Jesús</h1>
        <p>
          Soy un estudiante de Licenciatura en informatica apasionado por la tecnología...
          
        </p>
      </div>
    </div>
  );
};