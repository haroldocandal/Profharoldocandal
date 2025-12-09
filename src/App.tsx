import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes do Layout e Páginas
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { Teaching } from './components/pages/Teaching'; // ===== 1. IMPORTAÇÃO ADICIONADA =====
import { Contact } from './components/pages/Contact';

// A função temporária 'Ensino' foi removida

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* ===== 2. ROTA ATUALIZADA AQUI ===== */}
            {/* Agora o caminho /ensino renderiza o componente Teaching */}
            <Route path="/ensino" element={<Teaching />} />

            <Route path="/contato" element={<Contact />} />
            
            {/* Redireciona qualquer outra rota para a página inicial */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}