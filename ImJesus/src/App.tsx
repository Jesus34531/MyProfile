import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css'; // Importamos los estilos globales

// Layout y Perfil
import { Layout } from './components/Layout';
import { Perfil } from './pages/Perfil';

// Rutas de Hobbies
import { Hobbies } from './pages/Hobbies/Hobbies';
import { Deportes } from './pages/Hobbies/Deportes';
import { Musica } from './pages/Hobbies/Musica';
import { Anime } from './pages/Hobbies/Anime';

// Rutas de Universidad
import { Universidad } from './pages/Universidad/Universidad';
import { Trabajos } from './pages/Universidad/Trabajos';
import { Proyectos } from './pages/Universidad/Proyectos';
import { Agenda } from './pages/Universidad/Agenda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout es el padre, solo va una vez */}
        <Route path="/" element={<Layout />}>
          
          {/* Rutas de Perfil */}
          <Route index element={<Perfil />} />
          <Route path="perfil" element={<Perfil />} />
          
          {/* Rutas anidadas para Hobbies */}
          <Route path="hobbies" element={<Hobbies />}>
            <Route index element={<Deportes />} />
            <Route path="deportes" element={<Deportes />} />
            <Route path="musica" element={<Musica />} />
            <Route path="anime" element={<Anime />} />
          </Route>

          {/* Rutas anidadas para Universidad */}
          <Route path="universidad" element={<Universidad />}>
            <Route index element={<Trabajos />} />
            <Route path="trabajos" element={<Trabajos />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="agenda" element={<Agenda />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;