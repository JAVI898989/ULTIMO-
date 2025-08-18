import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Asistentes IA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#asistentes" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Asistentes
            </Link>
            <Link 
              to="/#precios" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Precios
            </Link>
            <Link 
              to="/estudiante" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Panel Estudiante
            </Link>
            <Link 
              to="/academia" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Panel Academia
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link to="/login">Empezar Gratis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/#asistentes" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Asistentes
              </Link>
              <Link 
                to="/#precios" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>
              <Link 
                to="/estudiante" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Panel Estudiante
              </Link>
              <Link 
                to="/academia" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Panel Academia
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Iniciar Sesión
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Empezar Gratis
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}