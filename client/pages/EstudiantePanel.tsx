import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Trophy, Settings, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';

export default function EstudiantePanel() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Panel de Estudiante
            </h1>
            <p className="text-gray-600">
              Gestiona tu progreso y accede a todos tus asistentes de IA
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Asistentes Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">3</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Tests Completados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">47</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Progreso Promedio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">78%</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Días Restantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">23</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* My Assistants */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Mis Asistentes
                  </CardTitle>
                  <CardDescription>
                    Asistentes de IA a los que tienes acceso
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Guardia Civil', progress: 85, status: 'Activo' },
                      { name: 'Policía Nacional', progress: 72, status: 'Activo' },
                      { name: 'Auxiliar Administrativo', progress: 45, status: 'En Progreso' }
                    ].map((assistant, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{assistant.name}</h3>
                            <p className="text-sm text-gray-600">Progreso: {assistant.progress}%</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant={assistant.status === 'Activo' ? 'default' : 'secondary'}>
                            {assistant.status}
                          </Badge>
                          <Button size="sm" asChild>
                            <Link to={`/assistant/${assistant.name.toLowerCase().replace(' ', '-')}`}>
                              Acceder
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Actividad Reciente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Test completado</p>
                      <p className="text-gray-600">Guardia Civil - Tema 5</p>
                      <p className="text-xs text-gray-500">Hace 2 horas</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Chat iniciado</p>
                      <p className="text-gray-600">Policía Nacional</p>
                      <p className="text-xs text-gray-500">Hace 1 día</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Acciones Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Ver Temarios
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Trophy className="w-4 h-4 mr-2" />
                      Hacer Test
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Configuración
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}