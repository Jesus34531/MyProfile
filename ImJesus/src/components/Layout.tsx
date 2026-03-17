import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { EmojiRain } from './EmojiRain';

export const Layout: React.FC = () => {
  return (
    <div className="app-layout">
      <EmojiRain />
      <Navbar />
      
      {/* <Outlet /> renderiza la página activa dependiendo de la URL */}
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};