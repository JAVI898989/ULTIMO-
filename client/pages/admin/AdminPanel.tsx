import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Bot, CreditCard, Settings, ArrowLeft, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';

export default function AdminPanel() {
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
              Panel de Administración
            </h1>
            <p className="text-gray-600">
              Gestiona la plataforma, usuarios y asistentes de IA
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Usuarios Totales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <p className="text-xs text-green-600">+12% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Asistentes Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">25</div>
                <p className="text-xs text-blue-600">3 nuevos esta semana</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Ingresos Mensuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">€47,392</div>
                <p className="text-xs text-green-600">+18% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Consultas IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">156K</div>
                <p className="text-xs text-purple-600">+25% esta semana</p>
              </CardContent>
            </Card>
          </div>

          {/* Admin Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-600" />
                  Gestionar Asistentes
                </CardTitle>
                <CardDescription>
                  Crear, editar y configurar asistentes de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link to="/admin/assistants">
                    Acceder
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Gestionar Usuarios
                </CardTitle>
                <CardDescription>
                  Administrar cuentas de estudiantes y academias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Acceder
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-purple-600" />
                  Packs Familiares
                </CardTitle>
                <CardDescription>
                  Configurar precios y gestionar suscripciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/admin/family-packs">
                    Acceder
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-orange-600" />
                  Sistema de Referidos
                </CardTitle>
                <CardDescription>
                  Monitorear y gestionar el programa de referidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/admin/referrals">
                    Acceder
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-600" />
                  Seguridad
                </CardTitle>
                <CardDescription>
                  Configurar permisos y seguridad del sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Acceder
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gray-600" />
                  Configuración
                </CardTitle>
                <CardDescription>
                  Ajustes generales de la plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Acceder
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>
                Últimas acciones realizadas en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'Nuevo usuario registrado', user: 'maria.garcia@email.com', time: 'Hace 5 minutos', type: 'user' },
                  { action: 'Asistente actualizado', user: 'Guardia Civil', time: 'Hace 1 hora', type: 'assistant' },
                  { action: 'Pago procesado', user: 'Pack Familiar 5', time: 'Hace 2 horas', type: 'payment' },
                  { action: 'Referido activado', user: 'juan.lopez@email.com', time: 'Hace 3 horas', type: 'referral' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        activity.type === 'user' ? 'bg-blue-100' :
                        activity.type === 'assistant' ? 'bg-green-100' :
                        activity.type === 'payment' ? 'bg-purple-100' : 'bg-orange-100'
                      }`}>
                        {activity.type === 'user' && <Users className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'assistant' && <Bot className="w-4 h-4 text-green-600" />}
                        {activity.type === 'payment' && <CreditCard className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'referral' && <BarChart3 className="w-4 h-4 text-orange-600" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.user}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.time}
                    </Badge>
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