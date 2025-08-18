import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, FileText, Download } from 'lucide-react';
import Header from '@/components/Header';

export default function TemarioAcademicoSimple() {
  const { slug } = useParams();

  const temarioData = {
    'guardia-civil': {
      name: 'Guardia Civil',
      description: 'Temario completo para las oposiciones de Guardia Civil',
      icon: '🛡️',
      topics: [
        'Constitución Española',
        'Ley Orgánica de Fuerzas y Cuerpos de Seguridad',
        'Derecho Penal',
        'Derecho Procesal Penal',
        'Seguridad Vial',
        'Protección Civil'
      ]
    },
    'policia-nacional': {
      name: 'Policía Nacional',
      description: 'Temario actualizado para Policía Nacional',
      icon: '👮',
      topics: [
        'Constitución Española',
        'Ley Orgánica de Fuerzas y Cuerpos de Seguridad',
        'Código Penal',
        'Ley de Enjuiciamiento Criminal',
        'Extranjería',
        'Seguridad Ciudadana'
      ]
    }
  };

  const assistant = temarioData[slug as keyof typeof temarioData] || temarioData['guardia-civil'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            to={`/assistant/${slug}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al asistente
          </Link>

          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex items-center">
              <div className="text-4xl mr-4">{assistant.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Temario - {assistant.name}
                </h1>
                <p className="text-gray-600">{assistant.description}</p>
              </div>
            </div>
          </div>

          {/* Topics List */}
          <div className="space-y-4">
            {assistant.topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                      Tema {index + 1}: {topic}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Ver PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Material completo sobre {topic.toLowerCase()} actualizado según la normativa vigente.
                    Incluye teoría, casos prácticos y jurisprudencia relevante.
                  </CardDescription>
                  
                  <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                    <span>📄 15-20 páginas</span>
                    <span>⏱️ Tiempo estimado: 2-3 horas</span>
                    <span>📅 Actualizado: Enero 2024</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Study Tips */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">
                💡 Consejos de Estudio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-blue-800">
                <li>• Estudia los temas en orden secuencial para mejor comprensión</li>
                <li>• Realiza los tests después de cada tema para reforzar conocimientos</li>
                <li>• Utiliza el chat IA para resolver dudas específicas</li>
                <li>• Repasa regularmente los temas anteriores</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}