import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, BarChart3, Settings, ArrowLeft, Plus } from 'lucide-react';
import Header from '@/components/Header';

export default function AcademiaPanel() {
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
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Panel de Academia
              </h1>
              <p className="text-gray-600">
                Gestiona tus estudiantes y supervisa el progreso de tu academia
              </p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Añadir Estudiante
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Estudiantes Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">127</div>
                <p className="text-xs text-green-600">+12% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Asistentes Utilizados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">8</div>
                <p className="text-xs text-gray-600">de 10 disponibles</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Tasa de Éxito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">94%</div>
                <p className="text-xs text-green-600">+2% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Ingresos Mensuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">€3,847</div>
                <p className="text-xs text-blue-600">+8% este mes</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Students Overview */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Estudiantes Recientes
                  </CardTitle>
                  <CardDescription>
                    Últimos estudiantes registrados en tu academia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'María García', course: 'Guardia Civil', progress: 85, status: 'Activo', joined: '2 días' },
                      { name: 'Juan López', course: 'Policía Nacional', progress: 72, status: 'Activo', joined: '5 días' },
                      { name: 'Ana Martín', course: 'Auxiliar Administrativo', progress: 45, status: 'En Progreso', joined: '1 semana' },
                      { name: 'Carlos Ruiz', course: 'Guardia Civil', progress: 92, status: 'Completado', joined: '2 semanas' }
                    ].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-sm font-medium text-blue-600">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{student.name}</h3>
                            <p className="text-sm text-gray-600">{student.course} • {student.progress}% completado</p>
                            <p className="text-xs text-gray-500">Registrado hace {student.joined}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant={
                            student.status === 'Completado' ? 'default' :
                            student.status === 'Activo' ? 'secondary' : 'outline'
                          }>
                            {student.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            Ver Detalle
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
              {/* Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Rendimiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Guardia Civil</span>
                        <span>45 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Policía Nacional</span>
                        <span>32 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Auxiliar Admin</span>
                        <span>28 estudiantes</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
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
                      <Users className="w-4 h-4 mr-2" />
                      Gestionar Estudiantes
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Ver Reportes
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="w-4 h-4 mr-2" />
                      Configurar Academia
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