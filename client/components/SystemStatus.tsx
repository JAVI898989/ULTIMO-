import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Clock, Database } from 'lucide-react';

export default function SystemStatus() {
  const systemStatus = {
    api: 'operational',
    database: 'operational', 
    ai: 'operational',
    payments: 'operational'
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'down':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge className="bg-green-100 text-green-800">Operativo</Badge>;
      case 'degraded':
        return <Badge className="bg-yellow-100 text-yellow-800">Degradado</Badge>;
      case 'down':
        return <Badge className="bg-red-100 text-red-800">Caído</Badge>;
      default:
        return <Badge variant="secondary">Desconocido</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Database className="w-5 h-5 mr-2" />
          Estado del Sistema
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getStatusIcon(systemStatus.api)}
              <span className="ml-2 text-sm font-medium">API Principal</span>
            </div>
            {getStatusBadge(systemStatus.api)}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getStatusIcon(systemStatus.database)}
              <span className="ml-2 text-sm font-medium">Base de Datos</span>
            </div>
            {getStatusBadge(systemStatus.database)}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getStatusIcon(systemStatus.ai)}
              <span className="ml-2 text-sm font-medium">Servicios IA</span>
            </div>
            {getStatusBadge(systemStatus.ai)}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getStatusIcon(systemStatus.payments)}
              <span className="ml-2 text-sm font-medium">Pagos</span>
            </div>
            {getStatusBadge(systemStatus.payments)}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Última actualización: {new Date().toLocaleString('es-ES')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}