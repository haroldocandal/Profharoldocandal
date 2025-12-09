import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ===== MENU ATUALIZADO COM OS NOVOS LINKS =====
  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Ensino', href: '/ensino' },
    { name: 'Pesquisa', href: 'https://lqtsm.figma.site' },
    { name: 'Extensão', href: 'https://conexaouerj.figma.site' },
    { name: 'Contato', href: '/contato' },
  ];

  const renderNavItem = (item: { name: string, href: string }) => {
    const isActive = location.pathname === item.href;
    const isExternal = item.href.startsWith('http');

    const style = `flex items-center px-3 py-2 rounded-md transition-colors text-sm font-medium ${
      isActive
        ? 'text-blue-400 bg-blue-900/20'
        : 'text-foreground hover:text-blue-400 hover:bg-accent'
    }`;

    if (isExternal) {
      return (
        <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={style}>
          {item.name}
          <ArrowUpRight size={16} className="ml-1" />
        </a>
      );
    }

    return (
      <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className={style}>
        {item.name}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Pessoal */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">HC</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-2">
            {navigation.map(renderNavItem)}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-blue-400 hover:bg-accent"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map(renderNavItem)}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}