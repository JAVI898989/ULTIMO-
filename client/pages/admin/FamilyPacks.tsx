import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, ArrowLeft, Users, TrendingUp, DollarSign, Settings } from 'lucide-react';
import Header from '@/components/Header';

export default function FamilyPacks() {
  const familyPacks = [
    {
      name: 'Familiar 3',
      assistants: 3,
      monthlyPrice: 30,
      annualPrice: 300,
      subscribers: 127,
      revenue: 3810
    },
    {
      name: 'Familiar 5',
      assistants: 5,
      monthlyPrice: 44,
      annualPrice: 440,
      subscribers: 89,
      revenue: 3916
    },
    {
      name: 'Familiar 8',
      assistants: 8,
      monthlyPrice: 59,
      annualPrice: 590,
      subscribers: 156,
      revenue: 9204,
      popular: true
    }
  ];

  const totalSubscribers = familyPacks.reduce((sum, pack) => sum + pack.subscribers, 0);
  const totalRevenue = familyPacks.reduce((sum, pack) => sum + pack.revenue, 0);

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
                Gestión de Packs Familiares
              </h1>
              <p className="text-gray-600">
                Configurar precios y gestionar suscripciones familiares
              </p>
            </div>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Configurar Precios
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Suscriptores Totales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{totalSubscribers}</div>
                <p className="text-xs text-green-600">+15% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Ingresos Mensuales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">€{totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-green-600">+22% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Packs Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">153</div>
                <p className="text-xs text-gray-600">de 200 límite</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Precio Promedio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  €{Math.round(familyPacks.reduce((sum, pack) => sum + pack.monthlyPrice, 0) / familyPacks.length)}
                </div>
                <p className="text-xs text-gray-600">por mes</p>
              </CardContent>
            </Card>
          </div>

          {/* Family Packs List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Packs Familiares
              </CardTitle>
              <CardDescription>
                Gestiona los diferentes planes familiares disponibles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {familyPacks.map((pack, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{pack.name}</h3>
                          {pack.popular && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              Más Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {pack.assistants} asistentes incluidos
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {pack.subscribers} suscriptores
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="w-3 h-3 mr-1" />
                            €{pack.revenue.toLocaleString()} ingresos
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          €{pack.monthlyPrice}/mes
                        </div>
                        <div className="text-xs text-gray-600">
                          €{pack.annualPrice}/año
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          Estadísticas
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="w-4 h-4 mr-1" />
                          Configurar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stock Status */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Estado del Stock</CardTitle>
              <CardDescription>
                Control de disponibilidad de packs familiares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Packs vendidos</span>
                  <span className="text-sm text-gray-900">47 de 200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '23.5%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>153 disponibles</span>
                  <span>200</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}