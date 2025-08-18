import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Familiar 3',
    description: '3 asistentes incluidos',
    monthlyPrice: 30,
    annualPrice: 300,
    assistants: 3,
    features: [
      '3 asistentes IA especializados',
      'Chat ilimitado',
      'Temarios actualizados',
      'Tests y flashcards',
      'Soporte por email'
    ]
  },
  {
    name: 'Familiar 5',
    description: '5 asistentes incluidos',
    monthlyPrice: 44,
    annualPrice: 440,
    assistants: 5,
    features: [
      '5 asistentes IA especializados',
      'Chat ilimitado',
      'Temarios actualizados',
      'Tests y flashcards',
      'Soporte prioritario',
      'Acceso anticipado a nuevos asistentes'
    ]
  },
  {
    name: 'Familiar 8',
    description: '8 asistentes incluidos',
    monthlyPrice: 59,
    annualPrice: 590,
    assistants: 8,
    popular: true,
    features: [
      '8 asistentes IA especializados',
      'Chat ilimitado',
      'Temarios actualizados',
      'Tests y flashcards',
      'Soporte VIP',
      'Acceso anticipado a nuevos asistentes',
      'Sesiones de tutoría mensuales',
      'Análisis de progreso avanzado'
    ]
  }
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="precios" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se adapte a tus necesidades de estudio
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anual
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
                ≈ 2 meses gratis
              </Badge>
            </button>
          </div>
        </div>

        {/* Brief List */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Precios</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Familiar 3 → 3 asistentes</span>
              <span className="font-semibold text-gray-900">30 €/mes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Familiar 5 → 5 asistentes</span>
              <span className="font-semibold text-gray-900">44 €/mes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Familiar 8 → 8 asistentes</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">59 €/mes</span>
                <Badge className="bg-yellow-100 text-yellow-800">Mejor valor</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative rounded-2xl shadow-sm ${
                plan.popular ? 'ring-2 ring-blue-600 shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-500 text-white px-4 py-1">
                    <Crown className="w-4 h-4 mr-1" />
                    Mejor valor
                  </Badge>
                </div>
              )}
              
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}€
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'mes' : 'año'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-green-600 mt-1">
                      Ahorras {Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100)}%
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" size="lg">
                  Pagar {billingCycle === 'monthly' ? 'Mensual' : 'Anual'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stock Alert */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium">
              Quedan 153/200 packs familiares disponibles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}