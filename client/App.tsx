import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '20px'
      }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>🚀</div>
        <h1 style={{
          fontSize: '48px',
          margin: '0 0 20px 0',
          color: '#2d3748',
          fontWeight: '700'
        }}>
          Tu Web Está Funcionando
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#718096',
          marginBottom: '40px'
        }}>
          ¡Perfecto! La aplicación está corriendo correctamente
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{ color: '#e53e3e', marginBottom: '15px', fontSize: '18px' }}>⚡ Estado</h3>
            <div style={{ textAlign: 'left', fontSize: '14px', color: '#4a5568' }}>
              <div style={{ marginBottom: '8px' }}>✅ React funcionando</div>
              <div style={{ marginBottom: '8px' }}>✅ Vite corriendo</div>
              <div style={{ marginBottom: '8px' }}>✅ Estilos aplicados</div>
              <div style={{ marginBottom: '8px' }}>✅ Todo listo</div>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: '#38a169', marginBottom: '15px', fontSize: '18px' }}>🎯 Tecnologías</h3>
            <div style={{ textAlign: 'left', fontSize: '14px', color: '#4a5568' }}>
              <div style={{ marginBottom: '8px' }}>• React 18</div>
              <div style={{ marginBottom: '8px' }}>• TypeScript</div>
              <div style={{ marginBottom: '8px' }}>• TailwindCSS</div>
              <div style={{ marginBottom: '8px' }}>• Express Server</div>
            </div>
          </div>
        </div>
        
        <div style={{
          background: '#fef5e7',
          border: '1px solid #f6e05e',
          borderRadius: '8px',
          padding: '15px',
          fontSize: '14px',
          color: '#744210'
        }}>
          🎉 ¡Tu web está funcionando perfectamente!
        </div>
      </div>
    </div>
  );
}

export default App;