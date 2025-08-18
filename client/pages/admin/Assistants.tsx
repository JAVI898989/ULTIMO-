import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, ArrowLeft, Plus, Edit, Trash2, Settings } from 'lucide-react';
import Header from '@/components/Header';

export default function Assistants() {
  const assistants = [
    {
      id: 'guardia-civil',
      name: 'Guardia Civil',
      description: 'Preparación completa para las oposiciones de Guardia Civil',
      icon: '🛡️',
      category: 'Fuerzas y Cuerpos de Seguridad',
      status: 'Activo',
      users: 1247,
      monthlyPrice: 29
    },
    {
      id: 'policia-nacional',
      name: 'Policía Nacional',
      description: 'Todo lo necesario para superar las oposiciones de Policía Nacional',
      icon: '👮',
      category: 'Fuerzas y Cuerpos de Seguridad',
      status: 'Activo',
      users: 892,
      monthlyPrice: 29
    },
    {
      id: 'auxiliar-administrativo',
      name: 'Auxiliar Administrativo',
      description: 'Preparación integral para auxiliar administrativo del Estado',
      icon: '📋',
      category: 'Administración',
      status: 'Activo',
      users: 634,
      monthlyPrice: 25
    },
    {
      id: 'psicologia',
      name: 'Psicología',
      description: 'Asistente especializado en psicología y salud mental',
      icon: '🧠',
      category: 'Salud',
      status: 'Activo',
      users: 156,
      monthlyPrice: 10
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link 
            to="/admin" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al panel admin
          </Link>

          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Gestión de Asistentes
              </h1>
              <p className="text-gray-600">
                Crear, editar y configurar asistentes de IA especializados
              </p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Asistente
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total Asistentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{assistants.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Usuarios Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {assistants.reduce((sum, a) => sum + a.users, 0).toLocaleString()}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Ingresos Estimados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  €{assistants.reduce((sum, a) => sum + (a.users * a.monthlyPrice), 0).toLocaleString()}
                </div>
                <p className="text-xs text-gray-600">por mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Promedio por Usuario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  €{Math.round(assistants.reduce((sum, a) => sum + a.monthlyPrice, 0) / assistants.length)}
                </div>
                <p className="text-xs text-gray-600">por mes</p>
              </CardContent>
            </Card>
          </div>

          {/* Assistants List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                Lista de Asistentes
              </CardTitle>
              <CardDescription>
                Gestiona todos los asistentes de IA disponibles en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assistants.map((assistant) => (
                  <div key={assistant.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{assistant.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{assistant.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{assistant.description}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {assistant.category}
                          </Badge>
                          <Badge variant={assistant.status === 'Activo' ? 'default' : 'outline'} className="text-xs">
                            {assistant.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {assistant.users.toLocaleString()} usuarios
                        </div>
                        <div className="text-sm text-gray-600">
                          €{assistant.monthlyPrice}/mes
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Settings className="w-4 h-4 mr-1" />
                          Configurar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}