import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, ArrowLeft, Users, TrendingUp, DollarSign, Target } from 'lucide-react';
import Header from '@/components/Header';

export default function Referrals() {
  const referralStats = {
    totalReferrals: 284,
    activeReferrals: 156,
    totalRevenue: 12847,
    conversionRate: 68
  };

  const topReferrers = [
    { name: 'Academia López', code: 'ACA-ABC123', referrals: 23, revenue: 2760, type: 'academia' },
    { name: 'María García', code: 'ALU-XYZ789', referrals: 18, revenue: 1890, type: 'alumno' },
    { name: 'Centro Estudios Plus', code: 'ACA-DEF456', referrals: 15, revenue: 2250, type: 'academia' },
    { name: 'Juan Martínez', code: 'ALU-QWE321', referrals: 12, revenue: 1440, type: 'alumno' }
  ];

  const recentReferrals = [
    { referrer: 'Academia López', referred: 'ana.ruiz@email.com', amount: 120, status: 'Aprobado', date: '2 horas' },
    { referrer: 'María García', referred: 'carlos.lopez@email.com', amount: 90, status: 'Pendiente', date: '5 horas' },
    { referrer: 'Centro Plus', referred: 'lucia.martin@email.com', amount: 150, status: 'Aprobado', date: '1 día' },
    { referrer: 'Juan Martínez', referred: 'pedro.sanchez@email.com', amount: 75, status: 'Rechazado', date: '2 días' }
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
                Sistema de Referidos
              </h1>
              <p className="text-gray-600">
                Monitorea y gestiona el programa de referidos de la plataforma
              </p>
            </div>
            <Button>
              <Gift className="w-4 h-4 mr-2" />
              Configurar Beneficios
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total Referidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{referralStats.totalReferrals}</div>
                <p className="text-xs text-green-600">+18% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Referidos Activos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{referralStats.activeReferrals}</div>
                <p className="text-xs text-blue-600">+12% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Ingresos por Referidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">€{referralStats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-green-600">+25% este mes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Tasa de Conversión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{referralStats.conversionRate}%</div>
                <p className="text-xs text-purple-600">+3% este mes</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Referrers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Top Referidores
                </CardTitle>
                <CardDescription>
                  Usuarios que más referidos han generado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topReferrers.map((referrer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          referrer.type === 'academia' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          <span className="text-xs font-medium">
                            {referrer.type === 'academia' ? 'A' : 'U'}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{referrer.name}</p>
                          <p className="text-xs text-gray-600">{referrer.code}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {referrer.referrals} referidos
                        </div>
                        <div className="text-xs text-green-600">
                          €{referrer.revenue.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Referrals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Referidos Recientes
                </CardTitle>
                <CardDescription>
                  Últimas conversiones del programa de referidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReferrals.map((referral, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{referral.referrer}</p>
                        <p className="text-xs text-gray-600">{referral.referred}</p>
                        <p className="text-xs text-gray-500">Hace {referral.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          €{referral.amount}
                        </div>
                        <Badge variant={
                          referral.status === 'Aprobado' ? 'default' :
                          referral.status === 'Pendiente' ? 'secondary' : 'destructive'
                        } className="text-xs">
                          {referral.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversion Funnel */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Embudo de Conversión
              </CardTitle>
              <CardDescription>
                Análisis del proceso de referidos y conversión
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Códigos generados</span>
                  <span className="text-sm text-gray-900">418</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Códigos utilizados</span>
                  <span className="text-sm text-gray-900">284 (68%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Conversiones exitosas</span>
                  <span className="text-sm text-gray-900">156 (55%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}