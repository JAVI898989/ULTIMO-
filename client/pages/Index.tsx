import React from 'react';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Tu Web Está Funcionando
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            ¡Perfecto! La aplicación está corriendo correctamente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              ⚡ Estado
            </h3>
            <ul className="text-blue-700 space-y-1">
              <li>• ✅ React funcionando</li>
              <li>• ✅ Vite corriendo</li>
              <li>• ✅ Estilos aplicados</li>
              <li>• ✅ Todo listo</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              🎯 Tecnologías
            </h3>
            <ul className="text-green-700 space-y-1">
              <li>• React 18</li>
              <li>• TypeScript</li>
              <li>• TailwindCSS</li>
              <li>• Express Server</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 font-medium">
              🎉 ¡Tu web está funcionando perfectamente!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}