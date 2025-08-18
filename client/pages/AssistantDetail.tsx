import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageCircle, BookOpen, Brain, Zap } from 'lucide-react';
import Header from '@/components/Header';

export default function AssistantDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('chat');

  // Mock assistant data
  const assistant = {
    id: slug,
    name: slug === 'guardia-civil' ? 'Guardia Civil' : 
          slug === 'policia-nacional' ? 'Policía Nacional' :
          slug === 'auxiliar-administrativo' ? 'Auxiliar Administrativo' :
          'Asistente IA',
    description: 'Preparación completa para oposiciones',
    icon: '🛡️',
    category: 'Fuerzas y Cuerpos de Seguridad',
    isPaid: true,
    monthlyPrice: 29
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          {/* Assistant Header */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="text-4xl mr-4">{assistant.icon}</div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {assistant.name}
                  </h1>
                  <p className="text-gray-600 mb-2">{assistant.description}</p>
                  <Badge variant="secondary">{assistant.category}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {assistant.monthlyPrice}€
                </div>
                <div className="text-sm text-gray-500">por mes</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'chat'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Chat IA
                </button>
                <button
                  onClick={() => setActiveTab('temario')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'temario'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Temario
                </button>
                <button
                  onClick={() => setActiveTab('tests')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'tests'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Brain className="w-4 h-4 inline mr-2" />
                  Tests
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'chat' && (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Chat con IA Especializada
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Resuelve tus dudas con nuestro asistente especializado en {assistant.name}
                  </p>
                  <Button>
                    <Zap className="w-4 h-4 mr-2" />
                    Iniciar Chat
                  </Button>
                </div>
              )}

              {activeTab === 'temario' && (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Temario Actualizado
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Accede al temario completo y actualizado para {assistant.name}
                  </p>
                  <Button>
                    Ver Temario
                  </Button>
                </div>
              )}

              {activeTab === 'tests' && (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Tests de Práctica
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Practica con tests específicos para {assistant.name}
                  </p>
                  <Button>
                    Empezar Test
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}