import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Importación de tus 3 imágenes
import foto from '../../assets/Personal/Perfil1.png';
import foto2 from '../../assets/Personal/Perfil2.png';
import foto3 from '../../assets/Personal/Perfil3.png';

export const Hobbies: React.FC = () => {
  const location = useLocation();
  
  // Lógica para la animación de scroll
  const [visibleImages, setVisibleImages] = useState<boolean[]>([false, false, false]);
  const imageRefs = [useRef(null), useRef(null), useRef(null)];

  // Agrupamos las imágenes en un arreglo para iterarlas fácilmente
  const imagenesGaleria = [foto, foto2, foto3];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleImages((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    imageRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      
      {/* 1. Redujimos el marginBottom de 40px a 20px */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        
        {/* Sub-menú Estilizado */}
        <nav style={styles.subMenu}>
          {['deportes', 'musica', 'anime'].map((item) => (
            <Link 
              key={item} 
              to={item} 
              style={{
                ...styles.link,
                borderBottom: location.pathname.includes(item) ? '2px solid var(--color-extra-1)' : '2px solid transparent',
                color: 'var(--text-light)'
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav> 
      </header>

      {/* 2. ¡DESCOMENTAMOS EL OUTLET! 
          Aquí es donde aparecerá el contenido de tus páginas de deportes, música, etc. */}
      {/* Nota: si no quieres que se vea una caja vacía cuando no hay sub-página seleccionada, 
          puedes quitarle el backgroundColor a styles.contentArea */}
      <main style={styles.contentArea}>
        <Outlet />
      </main>

      {/* 3. Redujimos drásticamente el marginTop de 120px a 40px */}
      <section style={{ marginTop: '40px', textAlign: 'center' }}>
        
        {/* Contenedor horizontal (Row) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '40px',
          flexWrap: 'wrap' 
        }}>
          {imagenesGaleria.map((imgSrc, i) => (
            <div 
              key={i}
              ref={imageRefs[i]}
              data-index={i}
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                border: '4px solid var(--color-secundario)',
                marginTop: i === 1 ? '-70px' : '70px',
                
                opacity: visibleImages[i] ? 1 : 0,
                transform: visibleImages[i] ? 'translateY(0)' : 'translateY(150px)',
                transition: 'all 1.5s ease-out'
              }}
            >
              <img 
                src={imgSrc} 
                alt={`Hobby ${i}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center'
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Estilos
const styles = {
  subMenu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '10px',
    borderBottom: '1px solid var(--color-secundario)',
    marginBottom: '0px' // Redujimos este margen para acercarlo más
  } as React.CSSProperties,
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '5px 10px',
    transition: 'all 0.3s ease'
  } as React.CSSProperties,
  contentArea: {
    padding: '30px',
    // Si la caja gris vacía te molesta cuando entras a /hobbies, 
    // puedes cambiar esta línea por backgroundColor: 'transparent'
    backgroundColor: 'var(--color-terciario)', 
    borderRadius: '15px',
    minHeight: '20px', // Redujimos la altura mínima para que no haga tanto bulto vacío
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    color: 'var(--text-light)'
  } as React.CSSProperties
};