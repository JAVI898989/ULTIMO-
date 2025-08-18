import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Header from '@/components/Header';

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="shadow-lg border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-900">
                ¡Pago Completado con Éxito!
              </CardTitle>
              <CardDescription className="text-lg">
                Tu suscripción ha sido activada correctamente
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">
                  ¿Qué sigue ahora?
                </h3>
                <ul className="text-sm text-green-800 space-y-1 text-left">
                  <li>✅ Tu cuenta ha sido activada automáticamente</li>
                  <li>✅ Ya tienes acceso a todos tus asistentes de IA</li>
                  <li>✅ Puedes empezar a estudiar inmediatamente</li>
                  <li>✅ Recibirás un email de confirmación en breve</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <Link to="/estudiante">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Ir a Mi Panel de Estudiante
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Link>
                </Button>
              </div>

              <div className="text-xs text-gray-500 pt-4 border-t">
                <p>
                  Si tienes alguna pregunta o problema, no dudes en contactarnos.
                  Tu satisfacción es nuestra prioridad.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}