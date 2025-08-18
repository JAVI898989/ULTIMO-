import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-900">
                Pago Cancelado
              </CardTitle>
              <CardDescription className="text-lg">
                No se ha procesado ningún cargo a tu tarjeta
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">
                  ¿Qué ha pasado?
                </h3>
                <p className="text-sm text-yellow-800">
                  Has cancelado el proceso de pago antes de completarlo. 
                  No se ha realizado ningún cargo y tu suscripción no ha sido activada.
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link to="/#precios">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Intentar de Nuevo
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Link>
                </Button>
              </div>

              <div className="text-xs text-gray-500 pt-4 border-t">
                <p>
                  Si has tenido algún problema durante el proceso de pago, 
                  no dudes en contactarnos para ayudarte.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}