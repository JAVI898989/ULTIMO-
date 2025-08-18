import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  Target,
  Brain,
  Zap
} from 'lucide-react';
import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import ReferralWidget from '@/components/ReferralWidget';
import SystemStatus from '@/components/SystemStatus';

// Datos de asistentes
const assistants = [
  {
    id: 'guardia-civil',
    name: 'Guardia Civil',
    description: 'Preparación completa para las oposiciones de Guardia Civil',
    icon: '🛡️',
    category: 'Fuerzas y Cuerpos de Seguridad',
    isPaid: true,
    monthlyPrice: 29,
    features: ['Temario completo', 'Tests ilimitados', 'Chat IA especializado', 'Flashcards']
  },
  {
    id: 'policia-nacional',
    name: 'Policía Nacional',
    description: 'Todo lo necesario para superar las oposiciones de Policía Nacional',
    icon: '👮',
    category: 'Fuerzas y Cuerpos de Seguridad',
    isPaid: true,
    monthlyPrice: 29,
    features: ['Temario actualizado', 'Simulacros de examen', 'IA conversacional', 'Material descargable']
  },
  {
    id: 'auxiliar-administrativo',
    name: 'Auxiliar Administrativo',
    description: 'Preparación integral para auxiliar administrativo del Estado',
    icon: '📋',
    category: 'Administración',
    isPaid: true,
    monthlyPrice: 25,
    features: ['Legislación actualizada', 'Casos prácticos', 'Tests por temas', 'Resolución de dudas IA']
  },
  {
    id: 'psicologia',
    name: 'Psicología',
    description: 'Asistente especializado en psicología y salud mental',
    icon: '🧠',
    category: 'Salud',
    isPaid: true,
    isPublic: true,
    monthlyPrice: 10,
    features: ['Consultas especializadas', 'Orientación profesional', 'Recursos actualizados']
  },
  {
    id: 'nutricion',
    name: 'Nutrición y Deporte',
    description: 'Asesoramiento en nutrición y actividad física',
    icon: '🥗',
    category: 'Salud',
    isPaid: true,
    isPublic: true,
    monthlyPrice: 10,
    features: ['Planes nutricionales', 'Rutinas de ejercicio', 'Consejos personalizados']
  },
  {
    id: 'legal',
    name: 'Asesor Legal',
    description: 'Consultas legales y orientación jurídica',
    icon: '⚖️',
    category: 'Legal',
    isPaid: true,
    isPublic: true,
    monthlyPrice: 10,
    features: ['Consultas legales', 'Documentos tipo', 'Orientación jurídica']
  }
];

const stats = [
  { label: 'Estudiantes activos', value: '12,000+', icon: Users },
  { label: 'Asistentes IA', value: '25+', icon: Brain },
  { label: 'Tasa de éxito', value: '94%', icon: Trophy },
  { label: 'Satisfacción', value: '4.9/5', icon: Star }
];

export default function Index() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by GPT-4 & IA Avanzada
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Prepara tus
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}Oposiciones
              </span>
              <br />con IA
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Asistentes de IA especializados para cada oposición. Temarios actualizados, 
              tests ilimitados y chat inteligente para resolver todas tus dudas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-4 text-lg" asChild>
              <Link to="/login">
                <Target className="w-5 h-5 mr-2" />
                Empezar Gratis
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
              <Link to="#asistentes">
                Ver Asistentes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asistentes Section */}
      <section id="asistentes" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Asistentes IA Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada asistente está entrenado específicamente para su oposición, 
              con temarios actualizados y metodología probada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistants.map((assistant) => (
              <Card key={assistant.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{assistant.icon}</div>
                    <Badge variant={assistant.isPublic ? "secondary" : "default"}>
                      {assistant.isPublic ? 'Público' : 'Oposiciones'}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {assistant.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {assistant.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{assistant.category}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {assistant.monthlyPrice}€
                        </div>
                        <div className="text-sm text-gray-500">por mes</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {assistant.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full group-hover:bg-blue-600 transition-colors" asChild>
                      <Link to={`/assistant/${assistant.id}`}>
                        <Zap className="w-4 h-4 mr-2" />
                        Acceder
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Referral Widget */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ReferralWidget mode="full" />
        </div>
      </section>

      {/* System Status */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SystemStatus />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Asistentes IA</h3>
              <p className="text-gray-400">
                La plataforma más avanzada para preparar oposiciones con inteligencia artificial.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Oposiciones</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/assistant/guardia-civil" className="hover:text-white">Guardia Civil</Link></li>
                <li><Link to="/assistant/policia-nacional" className="hover:text-white">Policía Nacional</Link></li>
                <li><Link to="/assistant/auxiliar-administrativo" className="hover:text-white">Auxiliar Administrativo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Asistentes Públicos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/assistant/psicologia" className="hover:text-white">Psicología</Link></li>
                <li><Link to="/assistant/nutricion" className="hover:text-white">Nutrición</Link></li>
                <li><Link to="/assistant/legal" className="hover:text-white">Legal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login" className="hover:text-white">Iniciar Sesión</Link></li>
                <li><Link to="/estudiante" className="hover:text-white">Panel Estudiante</Link></li>
                <li><Link to="/academia" className="hover:text-white">Panel Academia</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Asistentes IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}